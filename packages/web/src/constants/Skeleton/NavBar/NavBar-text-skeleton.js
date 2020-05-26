import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const NavBarTextSkeleton = (props) => {
	const classes = useStyles();
	const { loading = false } = props;

	return (
		<Box className={classes.root}>
			<Box className={classes.Container}>
				<CardHeader
					subheader={
						loading ? (
							<Skeleton className={classes.text_1} width={600} height={50} />
						) : (
							<Typography>Template-Catalog {props.title}</Typography>
						)
					}
				/>
			</Box>
		</Box>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		background: '#273746',
		color: '#FFFFFF',
		// marginTop: '75px',
	},
	Container: {
		width: '49%',
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'left',
		alignItems: 'center',
		marginLeft: '10px',
	},
	text_1: {
		width: '15%',
		height: 30,
		margin: '5px',
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

export default NavBarTextSkeleton;
