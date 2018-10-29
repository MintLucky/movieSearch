import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from './../actions';

class Header extends React.Component {

    logout = () => {
        this.props.dispatch(userActions.logout());
    };

    render() {
        const isLogged = this.props.auth.loggedIn;
        return (
            <nav className="navbar navbar-light">
                <div className="container">

                    <Link to="/" className="navbar-brand">
                        {/*{this.props.appName.toLowerCase()}*/}
                    </Link>

                    <ul className="nav navbar-nav">

                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/movies" className="nav-link">
                                Movies
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link to="/blabla" className="nav-link">
                                blabla
                            </Link>
                        </li>

                    </ul>

                    <ul className="nav navbar-nav pull-xs-right">
                        {isLogged &&
                            <li>
                                 Hello {this.props.auth.user.username} !
                            </li>
                        }
                        {!isLogged &&
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">
                                    Login
                                </Link>
                            </li>
                        }
                        {isLogged &&
                            <li className="nav-item">
                                <a href="javascript:void(0)" onClick={this.logout} className="nav-link">
                                    Logout
                                </a>
                            </li>
                        }
                    </ul>

                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.authentication
    }
};

export default connect(mapStateToProps)(Header);
