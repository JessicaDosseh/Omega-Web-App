import React from 'react';
import NavBarWebSkeleton from './constants/Skeleton/NavBar-web-skeleton.js';
import NavBarWebAppSkeleton from './constants/Skeleton/NavBar-web_app-skeleton.js';
import NavBarmMbileSkeleton from './constants/Skeleton/NavBar-mobile-skeleton.js';

function App() {
	return (
		<div className='App'>
			{/* <NavBarWebSkeleton /> */}
			{/* <NavBarWebAppSkeleton /> */}
			<NavBarmMbileSkeleton />
		</div>
	);
}

export default App;
