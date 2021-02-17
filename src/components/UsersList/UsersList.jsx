import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchUsers, setUserId } from '../../store/actions';


const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const history = useHistory()

  useEffect(()=>{
    dispatch(fetchUsers())
  }, [])


  return (
    users &&
    
    <table className="table">
      <thead className="table-primary">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Company</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Website</th>
          <th scope="col">Address</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody className="table-light">
        {
          users.map(user => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.company.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.address.city}, {user.address.street}</td>
              <button 
                type="button" 
                className="btn btn-info"
                onClick={()=> {
                  dispatch(setUserId(user.id))
                  history.push('/posts')
                }}
              >
                Posts
              </button>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

// const mapStateToProps = state => ({
//   userId: state.users.userId,
// })

export default UsersList;

