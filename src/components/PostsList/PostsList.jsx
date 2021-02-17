import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserPosts, selectPost } from '../../store/actions';
import { addNewPost } from '../../api/users';
import './PostList.css';
import { useHistory } from 'react-router-dom';


const PostsList = () => {
  const dispatch = useDispatch();
  const selectedUserId = useSelector(state => state.users.userId);
  const posts = useSelector(state => state.posts.posts);
  // const selectedPostId = useSelector(state => state.posts.selectedPost);
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const history = useHistory();

  useEffect(()=>{
    dispatch(fetchUserPosts(selectedUserId))
  }, [])

  const openModal = () => {
   setShowModal(true)
  }


  const addPost = async () => {
    const newPost = {
      userId: selectedUserId,
      title,
      body: content,
    } 

    await addNewPost(newPost)
    setTitle('');
    setContent('')
  }

  
  console.log(posts)

  return (
    <>
      <table className="table">
        <thead className="table-primary">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Content</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-light">
          {
            posts.map(post => (
              <tr key={post.id}>
                <th scope="row">{post.id}</th>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <button 
                  type="button" 
                  className="btn btn-info"
                  onClick={() => {
                    dispatch(selectPost(post.id))
                    history.push('/posts/details')
                  }}
                >
                  Details
                </button>
              </tr>
            ))
          }
        </tbody>
      </table>
      <button 
        type="button" 
        className="btn btn-primary"
        onClick={openModal}
      >
        Add new
      </button>

      {
        showModal && (
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add new post</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  data-bs-dismiss="modal" 
                  aria-label="Close"
                  onClick={()=>setShowModal(false)}
                >
                </button>
              </div>
              <div className="modal-body">
              <div className="form-floating mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  id="input-title" 
                  placeholder="title*"
                  value={title}
                  onChange={({target}) => setTitle(target.value)}
                />
                <label for="input-title">Post title</label>
              </div>
                <div className="form-floating">
                  <textarea 
                    className="form-control" 
                    placeholder="Leave a comment here" 
                    id="input-content"
                    value={content}
                    onChange={({target})=> setContent(target.value)}
                  >
                  </textarea>
                  <label for="input-content">Post content</label>
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-success"
                  onClick={addPost}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        )
      } 
    </>
  )
}

export default PostsList;