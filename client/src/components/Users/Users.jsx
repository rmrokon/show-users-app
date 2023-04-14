import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
import './Users.css';

class Users extends Component {
  // Initialize state
  state = { users: [] }

  // Fetch passwords after first mount
  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users: users }));
}

render() {
const { users } = this?.state;
    return (
          <div className="users">
            <h1>Users</h1>
            <ul>
              {users?.map(({user, id}) =>
              <Link to={`/users/${id}`} key={id}>
              <li className='singleUser'>
             <h3>{user?.name}</h3>
             <p>{user?.email}</p>
             <p>{user?.phone}</p>
             <p>{user?.website}</p>
            </li>
              </Link>
              )}
            </ul>
          </div>
      );    
  }
}


export default Users;
