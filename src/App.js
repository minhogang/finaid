import React, { Component } from 'react';
import './App.css';
import Helmet from 'react-helmet';
import { Switch, Route, withRouter } from "react-router-dom";
import Scholarships from './components/Scholarships';
import Main from './components/Main';

class App extends Component {

  	render() {
		let routes = (
			/* Wrap routes in react-router Switch tags to make sure only one route is rendered at once */
			<Switch>
				<Route exact path="/" component={Main} />
				<Route exact path="/scholarships" component={Scholarships} />
			</Switch>
		)
    	return (
		<div>
			{/* Helmet tag is for header data */}
			<Helmet>
				<title>Financial Aid Calculator</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
				/>
				<link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons"></link>
			</Helmet>
			{routes} {/* Render the routes */}
		</div>
    	);
  	}
}

export default withRouter(App);
