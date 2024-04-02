import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletePost } from "../features/posts/postSlice";

function PostList() {

    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deletePost(id));
    }

    return (
        <div justify-content="center">
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Acción</th>
                </tr>
                {posts.map((post) => (
                    <tr key={post.id}>
                        <td>{post.name}</td>
                        <td>{post.description}</td>
                        <td><button onClick={() => handleDelete(post.id)}>Eliminar</button></td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default PostList;