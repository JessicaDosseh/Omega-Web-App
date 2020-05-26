import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './utills/history';
import NavBarWebSkeleton from './constants/Skeleton/NavBar/NavBar-web-skeleton.js';
import LandingPage from './components/LandingPage/LandingPage';
import FooterSkeleton from './constants/Skeleton/Footer/Footer-skeleton';

const App = () => {
	const [token, setToken] = useState(localStorage.getItem('token'));

	const handleLoginStateChanged = () => {
		setToken(localStorage.getItem('token'));
	};

	return (
		<Router history={history}>
			<div className='App'>
				<NavBarWebSkeleton />
				<Route exact path='/' component={LandingPage} />
				<FooterSkeleton />
			</div>
		</Router>
	);
};

// Tools for demo:
// import TemplateCatalog from './constants/Skeleton/Template-Catalog';
//  <TemplateCatalog />

export default App;
