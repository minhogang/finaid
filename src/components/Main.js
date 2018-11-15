import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <h1>This is the main page</h1>
        )
    }
}

export default withRouter(Main);