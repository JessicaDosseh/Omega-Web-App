import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import GridOnIcon from '@material-ui/icons/GridOn';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import WhiteButton from '../../assets/WhiteButton';
import AvatarElement from './AvatarElement';

const NavBarWeb = (props) => {
  const classes = useStyles();
  const { loading = false } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.leftContainer}>
        <CardHeader
          title={
            loading ? (
              <Skeleton className={classes.text} width={60} height={55} />
            ) : (
              <Link to='/' className={classes.root}>
                <GridOnIcon style={{ color: blue.A700, marginRight: 10 }} />
                <Typography variant='subtitle2' style={{ fontWeight: 600 }}>
                  OMEGA 2020
                </Typography>
              </Link>
            )
          }
        />
        <CardHeader
          subheader={
            loading ? (
              <Skeleton className={classes.text} width={60} height={55} />
            ) : (
              <Link to='/about' className={classes.root}>
                <Typography variant='caption'>About Us</Typography>
              </Link>
            )
          }
        />
      </Box>

      <Box className={classes.rightContainer}>
        <Box className={classes.links}>
          <CardHeader
            subheader={
              loading ? (
                <Skeleton className={classes.text} width={60} height={55} />
              ) : (
                <Link to='/' className={classes.root}>
                  <Typography variant='caption'>Get Started</Typography>
                </Link>
              )
            }
          />
          <CardHeader
            subheader={
              loading ? (
                <Skeleton className={classes.text} width={60} height={55} />
              ) : (
                <Link to='/' className={classes.root}>
                  <Typography variant='caption'>Archive</Typography>
                </Link>
              )
            }
          />
          <CardHeader
            subheader={
              loading ? (
                <Skeleton className={classes.text} width={60} height={55} />
              ) : (
                <Link to='/' className={classes.root}>
                  <Typography variant='caption'>Leaderboard</Typography>
                </Link>
              )
            }
          />
          <CardHeader
            action={
              loading ? (
                <Skeleton className={classes.text_4} width={60} height={55} />
              ) : (
                <WhiteButton title={'Play'} />
              )
            }
          />
        </Box>

        <Box className={classes.icons}>
          <CardHeader
            action={
              loading ? (
                <Skeleton
                  className={classes.mode}
                  variant='circle'
                  width={25}
                  height={25}
                />
              ) : (
                <FiberManualRecordTwoToneIcon
                  className={classes.mode}
                  style={{ fontSize: 30, marginTop: 10 }}
                />
              )
            }
          />
          <CardHeader
            avatar={
              loading ? (
                <Skeleton variant='circle' width={40} height={40} />
              ) : (
                <AvatarElement />
              )
            }
          />
        </Box>
      </Box>
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
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    background: `${ModeTypeBG(modeValue)}`,
    color: `${ModeTypeColor(modeValue)}`,
    textDecoration: 'none',
    // textTransform: 'uppercase',
  },
  leftContainer: {
    // width: '30%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'left',
    alignItems: 'center',
    marginLeft: '10px',
  },
  rightContainer: {
    width: '70%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  links: {
    width: '75%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icons: {
    width: '25%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mode: {
    marginRight: '25px',
    marginLeft: '10px',
  },
}));

export default NavBarWeb;
