import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import logo from '../../../assets/omega-logo.png';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const NavBarMobileSkeleton = (props) => {
	const classes = useStyles();
	const { loading = false } = props;

	return (
		<Box className={classes.root} boxShadow={4}>
			<Box className={classes.leftContainer}>
				<CardHeader
					action={
						loading ? (
							<Skeleton className={classes.text_2} width={60} height={55} />
						) : (
							<MenuIcon />
						)
					}
				/>
			</Box>

			<Box className={classes.centerContainer}>
				<CardHeader
					avatar={
						loading ? (
							<Skeleton className={classes.text_1} />
						) : (
							<img src={logo} alt='Logo' width='35' height='40' />
						)
					}
				/>
			</Box>

			<Box className={classes.rightContainer}>
				<Box className={classes.icons}>
					<CardHeader
						avatar={
							loading ? (
								<Skeleton
									className={classes.avatar}
									variant='circle'
									width={40}
									height={40}
								/>
							) : (
								<Avatar className={classes.blue}>A</Avatar>
							)
						}
					/>
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
		justifyContent: 'center',
		position: 'fixed',
		top: 0,
		left: 0,
		background: '#FFFFFF',
	},
	leftContainer: {
		width: '40%',
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'left',
		alignItems: 'center',
		marginLeft: '10px',
	},
	rightContainer: {
		width: '40%',
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	centerContainer: {
		width: '10%',
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text_1: {
		width: 50,
		height: 50,
		margin: '5px',
	},
	text_2: {
		width: '15%',
		height: 30,
		margin: '5px',
		marginRight: '15px',
	},
	text_4: {
		width: '15%',
		height: 30,
		margin: '5px',
	},
	links: {
		width: '55%',
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	icons: {
		width: '45%',
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	mode: {
		marginRight: '25px',
		marginLeft: '10px',
	},
	avatar: {
		marginRight: '10px',
		marginLeft: '25px',
	},
	blue: {
		color: theme.palette.getContrastText(blue[500]),
		backgroundColor: blue[500],
	},
	lightBlue: {
		color: theme.palette.getContrastText(blue[50]),
		backgroundColor: blue[50],
	},
}));

export default NavBarMobileSkeleton;
