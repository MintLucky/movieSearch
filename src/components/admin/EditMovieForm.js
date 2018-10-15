import React, { Component } from 'react';
import { connect } from 'react-redux';
import {movieActions} from "../../actions";

const mapDispatchToProps = dispatch => ({
    loadMovieById: (id) =>
        dispatch(movieActions.getById(id))
});

class EditMovieForm extends Component {

    componentDidMount() {
        this.props.loadMovieById(this.props.match.params.id);
    }

    constructor(props) {
        super(props);

        this.state = {
            movie: {
                title: '',
                description: '',
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
            id: new Date(),
            title: movie.title,
            description: movie.description,
            editing: false
        };


        if (movie.title && movie.description) {
            dispatch(movieActions.create(data));
        }

    };

    render() {
        const { movie, submitted } = this.state;
        return (
            <div className="post-container">
                <h1 className="post_heading">Create Movie Post</h1>
                <form className="form" onSubmit={this.handleSubmit} >
                    <div className={'form-group' + (submitted && !movie.title ? ' has-error' : '')}>
                        <input required type="text" className="form-control" name="title" value={this.props.movie.title}
                               onChange={this.handleChange} placeholder="Enter Movie Title" /> <br /><br />
                        {submitted && !movie.title &&
                        <div className="help-block">Movie Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !movie.description ? ' has-error' : '')}>
                        <textarea required rows="5" name="description" onChange={this.handleChange}
                                  cols="28" value={this.props.movie.title} placeholder="Enter Movie Description" /><br /><br />
                        {submitted && !movie.description &&
                        <div className="help-block">Description is required</div>
                        }
                    </div>
                    <button>Create</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movieDetailed
    }
};

export default connect(mapDispatchToProps, mapStateToProps)(EditMovieForm);