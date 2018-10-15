import React, { Component } from 'react';
import { connect } from 'react-redux';
import {movieActions} from "../../actions";

const mapDispatchToProps = dispatch => ({
    loadMovieById: (id) =>
        dispatch(movieActions.getById(id)),
    updateMovie: (data) =>
        dispatch(movieActions.update(data))
});

class EditMovieForm extends Component {

    componentDidMount() {
        this.props.loadMovieById(this.props.match.params.id);
    }

    constructor(props) {
        super(props);

        this.state = {
            movie: {
                title: this.props.movie.title,
                description: this.props.movie.description,
            },
            submitted: false
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { movie } = this.state;
        this.setState({
            movie: {
                ...movie,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        const { movie } = this.state;
        const { dispatch } = this.props;

        const data = {
            id: this.props.match.params.id,
            updateTime : new Date(),
            title: movie.title,
            description: movie.description
        };

        if (movie.title && movie.description) {
            this.props.updateMovie(data);
        }
    };

    render() {
        return (
            <div className="post-container">
                <h1 className="post_heading">Update Movie Post</h1>
                <form className="form" onSubmit={this.handleSubmit} >
                    <input required type="text"
                           className="form-control"
                           name="title"
                           defaultValue={this.props.movie.title}
                           value={this.state.movie.title}
                           onChange={this.handleChange}
                           placeholder="Enter Movie Title" />
                    <br /><br />
                    <textarea required rows="5" name="description"
                              onChange={this.handleChange}
                              defaultValue={this.props.movie.title}
                              cols="28" value={this.state.movie.description}
                              placeholder="Enter Movie Description" />
                    <br /><br />
                    <button>Create</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movies.movieDetailed
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMovieForm);