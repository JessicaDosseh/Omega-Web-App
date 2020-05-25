import React from 'react';
import NavBarWebSkeleton from './constants/Skeleton/NavBar/NavBar-web-skeleton.js';
import LandingPage from './components/LandingPage/LandingPage';
import FooterSkeleton from './constants/Skeleton/Footer/Footer-skeleton';

import WT1 from './constants/Skeleton/Pages/web-template-page1';
import WT2 from './constants/Skeleton/Pages/web-template-page2';
import WT3 from './constants/Skeleton/Pages/web-template-page3';
import WT4 from './constants/Skeleton/Pages/web-template-page4';

function App() {
	return (
		<div className='App'>
			{/* <NavBarWebSkeleton /> */}
			{/* <LandingPage /> */}
			{/* <FooterSkeleton /> */}

			<WT1 />
			<WT2 />
			<WT3 />
			<WT4 />
		</div>
	);
}

export default App;
