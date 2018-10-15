import React, { Component } from 'react';
import MovieForm from './MovieForm';

class AddMovie extends Component {
    render() {
        return (
            <div className="App">
                <div className="navbar">
                    <h2 className="center ">Post It</h2>
                </div>
                <MovieForm />
            </div>
        );
    }
}
export default AddMovie;
