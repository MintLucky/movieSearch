import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class MovieTeaser extends Component {
    render() {
        return (
            <div className="post">
                <h2 className="post_title">{this.props.movie.title}</h2>
                <p className="post_message">{this.props.movie.description}</p>
                <div className="control-buttons">
                    <Link to={{pathname: '/movies/'+this.props.movie.id}} className="nav-link">
                        See Movie Details
                    </Link>
                    {/*<button className="edit"*/}
                            {/*onClick={() => this.props.dispatch({ type: movieConstants.EDIT_MOVIE, id: this.props.post.id })*/}
                            {/*}*/}
                    {/*>See Movie Details</button>*/}
                </div>
            </div>
        );
    }
}
export default connect()(MovieTeaser);