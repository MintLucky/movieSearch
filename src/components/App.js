import React, { Component } from 'react';
import AdminContainer from './containers/AdminContainer';
import  UserContainer  from "./containers/UserContainer";
import { connect } from "react-redux";
import { Router, Route, Switch } from 'react-router-dom';
import { history } from "./../helpers";


import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir, userIsAdminRedir,
    userIsAuthenticated, userIsNotAuthenticated } from '../helpers/auth'

const Admin = userIsAuthenticatedRedir(userIsAdminRedir(AdminContainer));

function App(authentication) {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/admin" component={Admin}/>
                <Route component={UserContainer} />
            </Switch>
        </Router>
    );
}

const mapStateToProps = (state) => ({
    authentication: state.authentication
});

export default connect(mapStateToProps)(App);