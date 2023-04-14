import { Component } from "react";
import { useParams } from 'react-router-dom';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class SingleUser extends Component{
    state = {
        user: {}
     }

    getUser(id) {
        fetch(`/users/${id}`)
          .then(res => res.json())
          .then(user => this.setState({ user: user }));
    }
    componentDidMount() {
        const { id } = this.props.params;
        this.getUser(id)
    }
    render (){
        const {user} = this.state;
        console.log(user);
        return (
            <div>
               <h3>{user?.user?.name}</h3>
               <p>{user?.user?.email}</p>
            </div>
        )
    }
} 

export default withParams(SingleUser)