import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import HomePage from './HomePage';
import Banner from './Banner';

const LandingPage = () => {
  return (
    <Box>
      <Container>
        <HomePage />
      </Container>
      <Banner />
    </Box>
  );
};

export default LandingPage;
