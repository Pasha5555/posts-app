import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  fetchUserPosts,
  selectPost,
  showModalCreate,
} from '../../store/actions';
import { ShowModalCreate } from './ShowModalCreate';
import './PostsList.scss';

const PostsList = () => {
  const dispatch = useDispatch();
  const selectedUserId = useSelector(state => state.users.userId);
  const posts = useSelector(state => state.posts.posts);
  const modalCreate = useSelector(state => state.app.showModalCreate);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchUserPosts(selectedUserId));
  }, []);

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
              <tr className="table-row" key={post.id}>
                <th scope="row">{post.id}</th>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => {
                      dispatch(selectPost(post));
                      history.push('/posts/details');
                    }}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => dispatch(showModalCreate(true))}
      >
        Add new
      </button>

      {
        modalCreate && <ShowModalCreate />
      }
    </>
  );
};

export default PostsList;
