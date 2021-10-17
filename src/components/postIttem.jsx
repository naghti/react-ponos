import React from 'react';
import MyButton from './UI/button/MyButton';

const PostIttem = (props) => {
  return (
      <>
        <div className="App">
            <div className="post">
            <div className="post__content">
                <strong>{props.number} {props.post.title}</strong>
                <div>
                  {props.post.body}
                </div>
            </div>   
            <div className="post__btns">
                <MyButton onClick={()=> props.remove(props.post)}> удалить </MyButton>
            </div>          
            </div>        
        </div>
      </>
  );
}

export default PostIttem;
