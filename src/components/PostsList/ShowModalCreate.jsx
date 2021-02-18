import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showMessage, showModalCreate } from '../../store/actions';
import { addNewPost } from '../../api/api';
import { WrongFields } from '../WrongFields/WrongFields';
import { ValidFields } from '../ValidFields/ValidFields';

export const ShowModalCreate = () => {
  const dispatch = useDispatch();
  const selectedUserId = useSelector(state => state.users.userId);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const message = useSelector(state => state.app.showMessage);
  const [wrongFields, setWrongFields] = useState(null);

  const addPost = async() => {
    const newPost = {
      userId: selectedUserId,
      title,
      body: content,
    };

    if (newPost.title && newPost.body) {
      try {
        await addNewPost(newPost);

        dispatch(showMessage(true));

        setTimeout(() => {
          dispatch(showMessage(false));
        }, 2000);
      } catch (error) {
        dispatch(showMessage(false));

        throw new Error(error);
      }

      setTitle('');
      setContent('');
    } else {
      setWrongFields(true);
      setTimeout(() => {
        setWrongFields(false);
      }, 2000);
    }
  };

  return (
    <div className="modal-create">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add new post</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => dispatch(showModalCreate(false))}
            />
          </div>
          <div className="modal-body">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="input-title"
                placeholder="title*"
                value={title}
                onChange={({ target }) => setTitle(target.value)}
              />
              <label htmlFor="input-title">Post title</label>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="input-content"
                value={content}
                onChange={({ target }) => setContent(target.value)}
              />
              <label htmlFor="input-content">Post content</label>
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
      {
        (message && <ValidFields />)
          || (wrongFields && <WrongFields />)
      }
    </div>
  );
};
