import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';
class AllPost extends Component {
    render() {
        return (
            <div>
                <h1 className="post_heading">All Movies</h1>
                {this.props.movies.map((movie) => (
                    <div key={movie.id}>
                        {movie.editing ? <EditComponent post={movie} key={movie.id} /> : <Post post={movie}
                                                                                            key={movie.id} />}
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

export default connect(mapStateToProps)(AllPost);