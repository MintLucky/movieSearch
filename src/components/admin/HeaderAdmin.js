import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from './../../actions';

class Header extends React.Component {

    logout = () => {
        this.props.dispatch(userActions.logout());
    };

    render() {
        const isLogged = this.props.auth.loggedIn;
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
