import React, { Component } from "react";
import { connect } from 'react-redux';
import { funcGet } from "../actions";

class App extends Component {
    componentDidMount(){
        let { dispatch } = this.props;
        // dispatch(funcGet());
    }
    render(){
        return (
            <div>
                React Blank Project
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        test: state.test
    };
}

export default connect(mapStateToProps)(App);