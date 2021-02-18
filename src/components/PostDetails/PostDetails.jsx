import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removePost } from '../../api/api';
import {
  fetchPostComments,
  showMessage,
  showModalEdit,
} from '../../store/actions';
import { ShowModalEdit } from './ShowModalEdit';
import './PostDetails.scss';
import { ValidFields } from '../ValidFields/ValidFields';

const PostDetail = () => {
  const dispatch = useDispatch();
  const selectedPost = useSelector(state => state.posts.selectedPost);
  const postComments = useSelector(state => state.comments.comments);
  const message = useSelector(state => state.app.showMessage);
  const modalEdit = useSelector(state => state.app.showModalEdit);

  useEffect(() => {
    dispatch(fetchPostComments(selectedPost.id));
  }, []);

  const deleteSelectedPost = async() => {
    try {
      await removePost(selectedPost.id);

      dispatch(showMessage(true));
      setTimeout(() => {
        dispatch(showMessage(false));
      }, 3000);
    } catch (error) {
      dispatch(showMessage(false));

      throw new Error(error);
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{selectedPost.title}</h5>
          <p className="card-text">{selectedPost.body}</p>
        </div>
        <div className="card-buttons">
          <button
            type="button"
            className="btn btn-danger"
            onClick={deleteSelectedPost}
          >
            Delete
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => dispatch(showModalEdit(true))}
          >
            Edit
          </button>
        </div>
      </div>
      <div className="list-group">
        {
            postComments.map(comment => (
              <div
                className="list-group-item list-group-item-action active"
                aria-current="true"
                key={comment.id}
              >
                <div className="d-flex w-100 justify-content-between">
                  <h4 className="item-name">{comment.name}</h4>
                  <small>3 days ago</small>
                </div>
                <a href="/" className="item-email">{comment.email}</a>
                <small>{comment.body}</small>
              </div>
            ))
          }
      </div>
      {
          modalEdit && <ShowModalEdit />
        }
      {
          message && <ValidFields />
        }
    </>
  );
};

export default PostDetail;
