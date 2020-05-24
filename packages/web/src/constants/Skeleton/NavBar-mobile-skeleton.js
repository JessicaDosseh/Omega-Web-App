import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const NavBarMobileSkeleton = () => {
	const classes = useStyles();

	return (
		<Box className={classes.root} boxShadow={4}>
			<Box className={classes.leftContainer}>
				<Skeleton className={classes.text_2} height={55} />
			</Box>

			<Box className={classes.centerContainer}>
				<Skeleton className={classes.text_1} />
			</Box>

			<Box className={classes.rightContainer}>
				<Box className={classes.icons}>
					<Skeleton
						className={classes.avatar}
						variant='circle'
						width={40}
						height={40}
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
}));

export default NavBarMobileSkeleton;
