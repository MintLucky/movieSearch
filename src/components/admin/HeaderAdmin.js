import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light">
                <div className="container">

                    <div>Welcome to Admin Part! </div>
                    <ul className="nav navbar-nav pull-xs-right">

                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Go to site
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="logout" className="nav-link">
                                Logout
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
