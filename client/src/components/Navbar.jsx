import { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    render (){
        return (
            <nav>
                <ul>
                    <Link to={'/users'}>
                    
                    <li>Users</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}