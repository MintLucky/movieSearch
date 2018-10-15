import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddMovie from "../AddMovie";
import HeaderAdmin from '../HeaderAdmin';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {RegisterPage} from "../authentication/RegisterPage";
import {LoginPage} from "../authentication/LoginPage";
import Home from "../Home";
import AllMovies from "../AllMovies";
class AdminContainer extends Component {
    render() {
        return (
            <div className="App">
                <HeaderAdmin />
                <Switch>
                    <Route exact path="/" component={AllMovies} />
                    <Route path="/create" component={AddMovie} />
                    {/*<Route path="/edit" component={EditMovie} />*/}
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authentication: state.authentication
    }
};

export default connect(mapStateToProps)(AdminComponent);