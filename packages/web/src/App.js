import React from 'react';
import NavBarWebSkeleton from './constants/Skeleton/NavBar/NavBar-web-skeleton.js';
import NavBarWebAppSkeleton from './constants/Skeleton/NavBar/NavBar-web_app-skeleton.js';
import NavBarmMbileSkeleton from './constants/Skeleton/NavBar/NavBar-mobile-skeleton.js';
import WebTemplatePage1 from './constants/Skeleton/Pages/web-template-page1';

function App() {
	return (
		<div className='App'>
			<NavBarWebSkeleton />
			{/* <NavBarWebAppSkeleton /> */}
			{/* <NavBarmMbileSkeleton /> */}
			<WebTemplatePage1 />
		</div>
	);
}

export default App;
