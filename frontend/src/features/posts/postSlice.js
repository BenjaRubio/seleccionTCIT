import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createPostThunk = createAsyncThunk(
    'posts/createPost',
    async(payload) => {
        try {
            const post = await axios.post(`/post`, payload).then((res) => res.data.post);
            return post
        } catch (err) {
            return err.message;
        }
        
    }
);

const initialState = await axios.get(`/post`).then((res) => res.data).then(res => res.posts);

export const postSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        filterPosts: (state, action) => {
            const posts = state.filter(post => post.name === action.payload);
            console.log(posts);
            if (posts) {
                return posts;
            }
        },
        deletePost: (state, action) => {
            axios.delete(`/post/${action.payload}`).then((res) => res.data).then((res) => {
                console.log(res);
            });
            const postFound = state.find(post => post.id === action.payload);
            if (postFound) {
                state.splice(state.indexOf(postFound), 1);
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createPostThunk.fulfilled, (state, action) => {
            state.push(action.payload);
        })
    }
});

export const { deletePost, filterPosts } = postSlice.actions;
export default postSlice.reducer;