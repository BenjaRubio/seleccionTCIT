import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPostThunk } from "../features/posts/postSlice";

function PostForm() {

    const [post, setPost] = useState({
        name: "",
        description: ""
    });
    const dispatch = useDispatch();

    const handleChange = e => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPostThunk(post));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="name" onChange={handleChange}/>
            <textarea name="description" placeholder="description" onChange={handleChange}></textarea>

            <button>Crear</button>
        </form>
    );
}

export default PostForm;