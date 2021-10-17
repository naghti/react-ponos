import React from 'react';
import PostIttem from './postIttem';

const PostList = ({posts,title, remove}) => {
  return (
      <>
        <h1 style={{textAlign:'center'}}>{title}</h1>
        <div>
            {posts.map((post,index) => 
                <PostIttem remove={remove} number = {index+1}post={post} key={post.id}/>      
            )}
        </div>
      </>
  );
}

export default PostList;
