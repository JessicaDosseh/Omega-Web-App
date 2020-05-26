import React from 'react';
import Box from '@material-ui/core/Box';

import NavBarTextSkeleton from './NavBar/NavBar-text-skeleton';

import NavBarWebSkeleton from './NavBar/NavBar-web-skeleton';
import NavBarWebAppSkeleton from './NavBar/NavBar-web_app-skeleton';
import NavBarMobileSkeleton from './NavBar/NavBar-mobile-skeleton';

import WT1 from './Pages/web-template-page1';
import WT2 from './Pages/web-template-page2';
import WT3 from './Pages/web-template-page3';
import WT4 from './Pages/web-template-page4';
import WT5 from './Pages/web-template-page5';
import WT6 from './Pages/web-template-page6';

import FooterSkeleton from './Footer/Footer-skeleton';

function TemplateCatalog() {
	return (
		<Box>
			{/**** NavBar Templates  ****/}
			<NavBarTextSkeleton title={'NavBar templates'} />
			{/* <NavBarWebSkeleton /> */}
			<NavBarWebAppSkeleton />
			{/* <NavBarMobileSkeleton /> */}
			{/**** Page Templates  ****/}
			<br /> <br /> <br />
			<NavBarTextSkeleton title={'web template #1'} />
			<WT1 />
			<br /> <br /> <br />
			<NavBarTextSkeleton title={'web template #2'} />
			<WT2 />
			<br /> <br /> <br />
			<NavBarTextSkeleton title={'web template #3'} />
			<WT3 />
			<br /> <br /> <br />
			<NavBarTextSkeleton title={'web template #4'} />
			<WT4 />
			<br /> <br /> <br />
			<NavBarTextSkeleton title={'web template #5'} />
			<WT5 />
			<br /> <br /> <br />
			<NavBarTextSkeleton title={'web template #6'} />
			<WT6 />
			<br /> <br /> <br />
			{/**** Footer Templates  ****/}
			<NavBarTextSkeleton title={'Footer template'} />
			<FooterSkeleton />
		</Box>
	);
}

export default TemplateCatalog;
