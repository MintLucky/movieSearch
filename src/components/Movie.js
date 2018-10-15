import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieActions } from "../actions";

const mapDispatchToProps = dispatch => ({
    loadMovieById: (id) =>
        dispatch(movieActions.getById(id))
});

class Movie extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadMovieById(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <h1 className="post_heading">
                    {this.props.movieDetailed.title}
                </h1>
                <div>
                    <p>
                        {this.props.movieDetailed.description}
                    </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movieDetailed: state.movies.movieDetailed
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);