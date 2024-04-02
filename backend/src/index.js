const express = require('express');
const cors = require('cors');
const { connectDB } = require('./db');
const port = 3001;

const app = express();
const bodyParser = require('body-parser');
connectDB();

app.use(cors({origin: "http://localhost"}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const { Post } = require('./models/index');

app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.get('/post', async(req, res) => {
    try {
        const posts = await Post.findAll();
        res.status(200).send({
            message: "Posts read successfully",
            posts: posts
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.post('/post', async(req, res) => {
    const { name, description } = req.body;
    try {
        const post = await Post.build({
            name: name,
            description: description
        });
        await post.save();
        res.status(200).send({
            message: 'Post created successfully',
            post: post
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.delete('/post/:post_id', async(req, res) => {
    const postId = req.params.post_id;
    try {
        const post = await Post.findByPk(postId);
        await Post.destroy({
            where: {
                id: postId
            }
        });
        res.status(200).send({
            message: 'Post deleted successfully',
            post: post
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
