import React from 'react';
import {connect} from 'react-redux';
import '../styles/main.scss';
import {fetchAllData} from '../actions/dataAction';
import Header from './Header';
import CelebritiesView from './CelebritiesView';

class App extends React.Component {
    componentWillMount() {
        this.props.fetchAllData()
    }
    render() {
        return (
            <div className="container">
                <Header />
                <CelebritiesView />
            </div>
        );
    }
}

export default connect(
    null,
    (dispatch) => ({
        fetchAllData: () => dispatch(fetchAllData())
    })
)(App);