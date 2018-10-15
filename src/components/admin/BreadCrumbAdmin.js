import React from 'react';
import { Link } from 'react-router-dom';

class BreadCrumbAdmin extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light">
                <div className="container">
                    <ul className="nav navbar-nav">

                        <li className="nav-item">
                            <Link to="/admin" className="nav-link">
                                Main Admin Page
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/admin/movies" className="nav-link">
                                List Of Movies
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/admin/users" className="nav-link">
                                List Of Users
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        );
    }
}

export default BreadCrumbAdmin;
