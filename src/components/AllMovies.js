import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieTeaser from './MovieTeaser';
import { movieActions } from "../actions";

const mapDispatchToProps = dispatch => ({
    loadAllMovies: () =>
        dispatch(movieActions.getAll())
});

class AllMovies extends Component {

    componentDidMount() {
        this.props.loadAllMovies();
    }

    render() {
        return (
            <div>
                <h1 className="post_heading">All Movies</h1>
                {this.props.movies.items.map((movie) => (
                    <div key={movie.id}>
                        <MovieTeaser movie={movie} key={movie.id} />
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllMovies);