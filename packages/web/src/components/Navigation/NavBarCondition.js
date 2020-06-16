import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import NavBarMobile from './NavBar/NavBar-mobile';
import NavBarWeb from './NavBar/NavBar-web';

const NavCondition = () => {
  const classes = useStyles();

  let viewPort = false;
  const viewPortWidth = false;
  const md = useMediaQuery('(min-width: 1050px)');
  if (viewPortWidth === md) {
    viewPort = true;
  } else {
    viewPort = false;
  }

  return (
    <Box className={classes.root} boxShadow={4}>
      <CssBaseline />
      <Container>
        {(() => {
          switch (viewPort) {
            case true:
              return <NavBarMobile />;
            default:
              return <NavBarWeb />;
          }
        })()}
      </Container>
    </Box>
  );
};

const modeValue = true;

const ModeTypeBG = (modeType) => {
  switch (modeType) {
    case true:
      return '#141414';
    default:
      return '#FFFFFF';
  }
};

const ModeTypeColor = (modeType) => {
  switch (modeType) {
    case true:
      return '#FFFFFF';
    default:
      return '#141414';
  }
};

const useStyles = makeStyles(() => ({
  root: {
    position: 'sticky',
    top: 0,
    left: 0,
    background: `${ModeTypeBG(modeValue)}`,
    color: `${ModeTypeColor(modeValue)}`,
  },
}));

export default NavCondition;
