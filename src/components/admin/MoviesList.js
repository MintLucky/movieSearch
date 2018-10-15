import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieActions } from "../../actions";

import { Link } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
    loadAllMovies: () =>
        dispatch(movieActions.getAll()),
    deleteMovie: (id) => {
        dispatch(movieActions.delete(id))
    }
});

class MoviesList extends Component {

    componentDidMount() {
        this.props.loadAllMovies();
    }

    render() {
        return (
            <div>
                <div>
                    <Link to="/admin/movies/create" className="nav-link">
                        Create New One Movie
                    </Link>
                </div>
                <h1 className="post_heading">All Movies</h1>
                <ul>
                    {this.props.movies.map((movie) => (
                        <li key={movie.id}>
                            <div>
                                {movie.title}
                                <button>
                                    <Link to={{pathname: '/admin/movies/edit/'+movie.id}} className="nav-link">
                                        Edit Movie
                                    </Link>
                                </button>
                                <button onClick={()=>this.props.deleteMovie(movie.id)}>Delete Movie</button>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.items
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);