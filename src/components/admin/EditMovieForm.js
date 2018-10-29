import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieActions } from "../../actions";

const mapDispatchToProps = dispatch => ({
    loadMovieById: (id) =>
        dispatch(movieActions.getById(id)),
    updateMovie: (data) =>
        dispatch(movieActions.update(data))
});

class EditMovieForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movie: {
                title: this.props.movie.title,
                description: this.props.movie.description,
            },
            submitted: false
        };

        this.props.loadMovieById(this.props.match.params.id);

        this.inputRef = React.createRef();
        this.descriptionTextAreaRef = React.createRef();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.movie !== this.props.movie) {
            this.setState({
                movie: this.props.movie
            });
        }
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
        const { dispatch } = this.props;

        const nameValue = this.inputRef.current.value;
        const descriptionValue = this.descriptionTextAreaRef.current.value;

        const data = {
            id: this.props.match.params.id,
            updateTime : new Date(),
            title: nameValue,
            description: descriptionValue
        };

        if (data.title && data.description) {
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
                           defaultValue={this.state.movie.title}
                           placeholder="Enter Movie Title"
                           ref={this.inputRef} />
                    <br /><br />
                    <textarea required rows="5"
                              name="description"
                              defaultValue={this.state.movie.description}
                              cols="28"
                              placeholder="Enter Movie Description"
                              ref={this.descriptionTextAreaRef} />
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