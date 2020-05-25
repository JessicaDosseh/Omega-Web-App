import React from 'react';
import Box from '@material-ui/core/Box';
import Home from './HomePage';
import Ads from './advertisement';

const LandingPage = () => {
	return (
		<Box>
			<Home />
			<Ads />
		</Box>
	);
};

export default LandingPage;
