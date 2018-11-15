import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Helmet from 'react-helmet';
import green from '@material-ui/core/colors/green';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Switch, Route, Link } from "react-router-dom";
import Scholarships from './components/Scholarships';
import Main from './components/Main';

const theme = createMuiTheme({
	palette: {
	  primary: green,
	},
	typography: {
	  useNextVariants: false,
	},
});

class App extends Component {
	
  	render() {
    	return (
		<div>
			<Helmet>
				<title>Financial Aid Calculator</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
				/>
				<link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons"></link>
			</Helmet>
			<Switch>
				<Route exact path="/main" component={Main} />
				<Route exact path="/scholarships" component={Scholarships} />
			</Switch>

			<MuiThemeProvider theme={theme}>
				<Link to="/main">
					<Button variant="contained" color="primary">
						Main
					</Button>
				</Link>
				<Link to="/scholarships">
					<Button variant="contained" color="primary">
						Scholarships
					</Button>	
				</Link>
			</MuiThemeProvider>
		</div>
    	);
  	}
}

export default App;
