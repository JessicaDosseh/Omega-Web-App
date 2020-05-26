import React from 'react';
import TemplateCatalog from './constants/Skeleton/Template-Catalog';
import NavBarWebSkeleton from './constants/Skeleton/NavBar/NavBar-web-skeleton.js';
import LandingPage from './components/LandingPage/LandingPage';
import FooterSkeleton from './constants/Skeleton/Footer/Footer-skeleton';

function App() {
	return (
		<div className='App'>
			{/* <TemplateCatalog /> */}

			<NavBarWebSkeleton />
			<LandingPage />
			<FooterSkeleton />
		</div>
	);
}

export default App;
