import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const NavBarWebSkeleton = (props) => {
	const classes = useStyles();
	const { loading = false } = props;

	return (
		<Box className={classes.root} boxShadow={4}>
			<Box className={classes.leftContainer}>
				<CardHeader
					title={
						loading ? (
							<Skeleton className={classes.text_2} width={60} height={55} />
						) : (
							'Omega 2020'
						)
					}
				/>
				<CardHeader
					subheader={
						loading ? (
							<Skeleton className={classes.text_2} width={60} height={55} />
						) : (
							'ABOUT US'
						)
					}
				/>
			</Box>

			<Box className={classes.rightContainer}>
				<Box className={classes.links}>
					<CardHeader
						subheader={
							loading ? (
								<Skeleton className={classes.text_4} width={60} height={55} />
							) : (
								'GET STARTED'
							)
						}
					/>
					<CardHeader
						subheader={
							loading ? (
								<Skeleton className={classes.text_4} width={60} height={55} />
							) : (
								'ARCHIVE'
							)
						}
					/>
					<CardHeader
						subheader={
							loading ? (
								<Skeleton className={classes.text_4} width={60} height={55} />
							) : (
								'LEADERBOARD'
							)
						}
					/>
					<CardHeader
						action={
							loading ? (
								<Skeleton className={classes.text_4} width={60} height={55} />
							) : (
								<Button variant='contained'>Play</Button>
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
								// lightmode / darkmode
								<FiberManualRecordTwoToneIcon
									className={classes.mode}
									style={{ fontSize: 25 }}
								/>
							)
						}
					/>
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
		width: '100vw',
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'center',
		position: 'fixed',
		top: 0,
		left: 0,
	},
	leftContainer: {
		width: '49%',
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'left',
		alignItems: 'center',
		marginLeft: '10px',
	},
	rightContainer: {
		width: '50%',
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text_2: {
		width: '15%',
		height: 30,
		margin: '5px',
	},
	text_4: {
		width: '15%',
		height: 30,
		margin: '5px',
		fontSize: 12,
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
		justifyContent: 'center',
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

export default NavBarWebSkeleton;
