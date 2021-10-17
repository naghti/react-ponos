import { useState } from 'react';
// import Counter from './components/counter';
// import ClassCounter from './components/classCounter';
import "./styles/app.css"
import PostIttem from './components/postIttem';
import PostList from './components/postList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import { useRef } from 'react/cjs/react.development';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
  // const [value, setValue] = useState('текст в инпуе')

  const [posts, setPosts] = useState([
    {id:1, title: 'JS1', body:'description'},
    {id:2, title: 'JS2', body:'description'},
    {id:3, title: 'JS3', body:'description'},
  ])
  // const [title,setTitle] = useState('')
  // const [post,setPost] = useState({title:'',body:''})


  const bodyInputRef = useRef()
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  } 
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  return (
    <div className='app'>
      <PostForm create={createPost}/>
      <div>
      <hr style={{margin:'15px'}}/>
      <MySelect
        defaultValue={'сортировка'}
        options={[
          {value: 'title',name: 'По  названию'},
          {value: 'body',name: 'По  описанию'}
        ]}        
      />
      </div>
      {posts.length !== 0
        ? <PostList posts={posts} remove={removePost} title='список постов 123'/>
        : <h1 style={{textAlign:'center'}}>Посты не найдены</h1>
      }
    </div>
  );
}

export default App;
