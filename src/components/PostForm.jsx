import React from 'react';
import { useState } from 'react/cjs/react.development';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {
    const [post,setPost] = useState({title:'',body:''})
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:'',body:''})
    }   
    return ( 
        <>
            <form>
                <MyInput 
                    placeholder='название поста' 
                    value = {post.title}
                    onChange={e => setPost({...post,title:e.target.value})}
                />
                <MyInput 
                    value = {post.body}
                    onChange={e => setPost({...post,body:e.target.value})}
                    placeholder='описание поста'
                />
                <MyButton onClick={addNewPost}> создать пост </MyButton>
            </form>
        </>
    );
}

export default PostForm;