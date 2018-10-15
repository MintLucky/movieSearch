import React, { Component } from 'react';
import AllMovies from './AllMovies';
import Home from "./Home";
import Header from './Header';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { RegisterPage } from "./authentication/RegisterPage";
import { LoginPage } from "./authentication/LoginPage";

function UserContainer(authentication) {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/movies" component={AllMovies} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
            </Switch>
        </div>

    );
}

const mapStateToProps = (state) => ({
    authentication: state.authentication
});

export default connect(mapStateToProps)(UserContainer);