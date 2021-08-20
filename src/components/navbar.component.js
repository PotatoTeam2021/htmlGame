import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to ="/" className="navbar-brand">Html Game</Link>
                <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <il className="navbat-item">
                        <Link to="/" className="nav-link">Exercises</Link>
                    </il>
                    <il className="navbat-item">
                        <Link to="/create" className="nav-link">Create Exercise Log</Link>
                    </il>
                    <il className="navbat-item">
                        <Link to="/user" className="nav-link">Create User</Link>
                    </il>
                </ul>
                </div>
            </nav>
        );
    }
}
