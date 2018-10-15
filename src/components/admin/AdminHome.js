import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({
    ...state.home
});

class AdminHome extends React.Component {
    render() {
        return (
            <div className="home-page">
                <div className="container page">
                    <ul className="nav navbar-nav pull-xs-right">
                        <li className="nav-item">
                            <Link to="/admin/movies" className="nav-link">
                                Edit Movies
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/admin/something-else" className="nav-link">
                                Edit Something Else
                            </Link>
                        </li>

                    </ul>

                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(AdminHome);
