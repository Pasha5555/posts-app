import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


const PostDetail = () => {
  const selectedPostId = useSelector(state => state.posts.selectedPost);

  return (
    <h1>{selectedPostId}</h1>
  )
}

export default PostDetail;