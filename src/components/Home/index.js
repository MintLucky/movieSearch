import Banner from './Banner';
import React from 'react';
import { connect } from 'react-redux';
// import {
//     HOME_PAGE_LOADED,
//     HOME_PAGE_UNLOADED,
//     APPLY_TAG_FILTER
// } from '../../constants/movie';

const mapStateToProps = state => ({
    ...state.home
});

const mapDispatchToProps = dispatch => ({
    // onClickTag: (tag, pager, payload) =>
    //     dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
    // onLoad: (tab, pager, payload) =>
    //     dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
    // onUnload: () =>
    //     dispatch({  type: HOME_PAGE_UNLOADED })
});

class Home extends React.Component {
    componentWillMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="home-page">
                <Banner />
                <div className="container page">

                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
