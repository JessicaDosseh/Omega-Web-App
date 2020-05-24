import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const NavBarWebSkeleton = (props) => {
	const classes = useStyles();
	const { loading = false } = props;

	return (
		<Box className={classes.root} boxShadow={4}>
			<Box className={classes.leftContainer}>
				<Skeleton className={classes.text_2} />
				<Skeleton className={classes.text_2} />
			</Box>

			<Box className={classes.rightContainer}>
				<Box className={classes.links}>
					<Skeleton className={classes.text_4} />
					<Skeleton className={classes.text_4} />
					<Skeleton className={classes.text_4} />
					<Skeleton className={classes.text_4} height={55} />
				</Box>

				<Box className={classes.icons}>
					<Skeleton
						className={classes.mode}
						variant='circle'
						width={25}
						height={25}
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
								<Avatar>A</Avatar>
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
}));

export default NavBarWebSkeleton;
