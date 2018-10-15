import React, { Component } from 'react';
import AllMovies from '../AllMovies';
import Home from "../Home/index";
import Header from '../Header';
import Movie from '../Movie';
import { connect } from "react-redux";
import { Route, Switch } from 'react-router-dom'
import { RegisterPage } from "../authentication/RegisterPage/index";
import { LoginPage } from "../authentication/LoginPage/index";
import NotFoundComponent from "../NotFoundComponent";

function UserContainer(authentication) {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/movies" component={AllMovies} />
                <Route path="/movies/:id" component={Movie} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route component={NotFoundComponent} />
            </Switch>
        </div>

    );
}

const mapStateToProps = (state) => ({
    authentication: state.authentication
});

export default connect(mapStateToProps)(UserContainer);