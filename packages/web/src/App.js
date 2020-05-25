import React from 'react';
import NavBarWebSkeleton from './constants/Skeleton/NavBar/NavBar-web-skeleton.js';
import NavBarWebAppSkeleton from './constants/Skeleton/NavBar/NavBar-web_app-skeleton.js';
import NavBarmMbileSkeleton from './constants/Skeleton/NavBar/NavBar-mobile-skeleton.js';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
	return (
		<div className='App'>
			<NavBarWebSkeleton />
			{/* <NavBarWebAppSkeleton /> */}
			{/* <NavBarmMbileSkeleton /> */}
			<LandingPage />
		</div>
	);
}

export default App;
