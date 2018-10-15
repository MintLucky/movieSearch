import React, { Component } from 'react';
import CreateMovieForm from './CreateMovieForm';

class AddMovie extends Component {
    render() {
        return (
            <div className="App">
                <div className="navbar">
                    <h2 className="center ">Post It</h2>
                </div>
                <CreateMovieForm />
            </div>
        );
    }
}
export default AddMovie;
