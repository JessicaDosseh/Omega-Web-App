import React from 'react';
import NavBarWebSkeleton from './constants/Skeleton/NavBar/NavBar-web-skeleton.js';
import NavBarWebAppSkeleton from './constants/Skeleton/NavBar/NavBar-web_app-skeleton.js';
import NavBarmMbileSkeleton from './constants/Skeleton/NavBar/NavBar-mobile-skeleton.js';
import Home from './components/HomePage';

function App() {
	return (
		<div className='App'>
			<NavBarWebSkeleton />
			{/* <NavBarWebAppSkeleton /> */}
			{/* <NavBarmMbileSkeleton /> */}
			<Home />
		</div>
	);
}

export default App;
