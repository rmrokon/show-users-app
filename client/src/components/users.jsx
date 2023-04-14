import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";

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
      <div className="App">
        {/* Render the cities*/}
          <div>
            <h1>Users</h1>
            <ul className="cities">
              {users?.map(({user, id}) =>
              <Link to={`/users/${id}`} key={id}>
              <li>
              {user?.name}
            </li>
              </Link>
              )}
            </ul>
          </div>
      </div>
      );    
  }
}


export default Users;
