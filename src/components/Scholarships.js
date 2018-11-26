import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { colorGreen } from '../themes/buttonthemes';
import { connect } from 'react-redux';
import { Button, Input} from '@material-ui/core';
import * as actions from '../store/actions/actions';

class Scholarships extends Component {
    state = {
        inputValue: 0
    }
    
    handleChange = (value) => {
        this.setState({inputValue: parseInt(value)})
    }

    handleClick = (event) => {
        this.props.addValue(this.state.inputValue)
    }

    render() {
        return (
            <div>
                <h1>This is the scholarships page</h1>
                <MuiThemeProvider theme={colorGreen}>
                    <Link to="/">
                        <Button variant="contained" color="primary">
                            Main
                        </Button>
                    </Link>
                </MuiThemeProvider>
                <Input type="number" value={this.state.inputValue} onChange={e => this.handleChange(e.target.value)}/>
                <Button onClick={this.handleClick}>
                    Add Value
                </Button> 
                &nbsp;
                <div>Current Value in Redux Store: <span>{this.props.currentValue}</span></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentValue: state.default_value
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addValue: (value) => dispatch(actions.addValue(value))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Scholarships));