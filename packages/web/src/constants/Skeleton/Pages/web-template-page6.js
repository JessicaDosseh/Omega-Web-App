import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const WebTemplatePage6 = (props) => {
	const classes = useStyles();
	const { loading = false } = props;

	return (
		<Box className={classes.root}>
			<Box className={classes.mainContainer}>
				<Box className={classes.leftContainer}>
					<Box className={classes.container}>
						<CardHeader
							title={
								loading ? (
									<Skeleton
										className={classes.title}
										width={400}
										height={100}
										m={0}
										p={0}
									/>
								) : (
									'Title'
								)
							}
						/>
						<CardHeader
							subheader={
								loading ? (
									<Skeleton width={400} height={400} margin={0} padding={0} />
								) : (
									<Typography>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Typography>
								)
							}
						/>
					</Box>
				</Box>

				<Box className={classes.centerContainer}>
					<Box className={classes.container}>
						<CardHeader
							title={
								loading ? (
									<Skeleton
										className={classes.title}
										width={400}
										height={100}
									/>
								) : (
									'Title'
								)
							}
						/>
						<CardHeader
							subheader={
								loading ? (
									<Skeleton width={400} height={400} margin={0} padding={0} />
								) : (
									<Typography>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Typography>
								)
							}
						/>
					</Box>
				</Box>

				<Box className={classes.rightContainer}>
					<Box className={classes.container}>
						<CardHeader
							title={
								loading ? (
									<Skeleton
										className={classes.title}
										width={400}
										height={100}
									/>
								) : (
									'Title'
								)
							}
						/>
						<CardHeader
							subheader={
								loading ? (
									<Skeleton width={400} height={400} margin={0} padding={0} />
								) : (
									<Typography>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Typography>
								)
							}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'space-evenly',
		marginTop: '75px',
	},
	banner: {
		width: '100vw',
		height: '20vh',
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'center',
		background: '#F8F8F8',
	},
	mainContainer: {
		width: 'auto',
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'space-evenly',
		marginTop: 150,
		marginBottom: 150,
	},
	leftContainer: {
		width: '20%',
		display: 'flex',
		flexFlow: 'column wrap',
		justifyContent: 'center',
	},
	centerContainer: {
		width: '20%',
		display: 'flex',
		flexFlow: 'column wrap',
		justifyContent: 'center',
	},
	rightContainer: {
		width: '20%',
		display: 'flex',
		flexFlow: 'column wrap',
		justifyContent: 'center',
	},
	container: {
		width: '100%',
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'flex-start',
		alignItems: 'center',
		alignContent: 'center',
	},
	title: {
		width: '15%',
		height: 30,
		margin: '5px',
	},
}));

const ColorButton = withStyles((theme) => ({
	root: {
		paddingLeft: 20,
		paddingRight: 20,
		color: theme.palette.getContrastText(blue[600]),
		backgroundColor: blue[600],
		'&:hover': {
			backgroundColor: blue[800],
		},
	},
}))(Button);

export default WebTemplatePage6;
