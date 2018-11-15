import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Helmet from 'react-helmet';

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

			<Button variant="contained" color="primary">
				Hello World
			</Button>
		</div>
    	);
  	}
}

export default App;
