import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddMovie from "../admin/AddMovie";
import HeaderAdmin from '../admin/HeaderAdmin';
import AdminHome from '../admin/AdminHome';
import EditMovieForm from '../admin/EditMovieForm';
import BreadCrumbAdmin from '../admin/BreadCrumbAdmin';
import MoviesList from '../admin/MoviesList';
import { Route, Switch } from 'react-router-dom'
class AdminContainer extends Component {
    render() {
        return (
            <div className="App">
                <HeaderAdmin />
                <BreadCrumbAdmin />
                <Switch>
                    <Route exact path="/admin" component={AdminHome} />
                    <Route exact path="/admin/movies" component={MoviesList} />
                    <Route path="/admin/movies/create" component={AddMovie} />
                    <Route path="/admin/movies/edit/:id" component={EditMovieForm} />
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

export default connect(mapStateToProps)(AdminContainer);