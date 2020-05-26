import React from 'react';
import Box from '@material-ui/core/Box';
import Home from './HomePage';
import Info from './Info';
import Ads from './advertisement';

const LandingPage = () => {
	return (
		<Box>
			<Home />
			<Info />
			<Ads />
		</Box>
	);
};

export default LandingPage;
