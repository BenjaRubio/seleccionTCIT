import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterPosts } from "../features/posts/postSlice";


function PostFilter() {

    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleChange = e => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(filterPosts(text))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="filter" type="text" placeholder="buscar post" onChange={handleChange}/>
            <button>Buscar</button>
        </form>
    );
}

export default PostFilter;