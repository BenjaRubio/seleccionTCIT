import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import PostFilter from './components/PostFilter';

function App() {

  return (
    <div className="App">
      <h1>Posts</h1>
      <PostFilter />
      <PostList />
      <PostForm />
    </div>
  );
}

export default App;
