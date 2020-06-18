import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const HomePage = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.headerBox}>
        <CardHeader
          avatar={
            loading ? (
              <Skeleton
                className='bannerIMG'
                variant='rect'
                width={600}
                height={600}
              />
            ) : (
              <Box>
                <Typography variant='h3' className={classes.header}>
                  Omega 2020 Interactive Sudoku
                </Typography>
                <br />
                <Typography variant='subtitle2' className={classes.header}>
                  Learn how to play, upload your own sudoku
                  <br />
                  games, and compete with friends :&#41;
                </Typography>
              </Box>
            )
          }
        />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '2px solid red',
  },
  header: {
    fontWeight: 600,
    textAlign: 'center',
  },
}));

export default HomePage;
