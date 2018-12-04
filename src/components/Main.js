import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { colorGreen } from '../themes/buttonthemes';
import { MuiThemeProvider} from '@material-ui/core/styles';
import * as actions from '../store/actions/actions'
import { Button, Input} from '@material-ui/core'

class Main extends Component {
    //The state exclusive to this component
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
                <h1>This is the main page</h1>
                <MuiThemeProvider theme={colorGreen}>
                    <Link to="/scholarships">
                        <Button variant="contained" color="primary">
                            Scholarships
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
/* mapStateToProps and mapDispatchToProps are exclusive functions of redux */
/* We can access the state in the reducer.js */
const mapStateToProps = state => {
    return {
        currentValue: state.default_value
    }
}

/* We can dispatch actions to the reducer with actions from actions.js */
const mapDispatchToProps = dispatch => {
    return {
        addValue: (value) => dispatch(actions.addValue(value))
    }
}
//connect() the component to redux, and withRouter() allows routing
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));