import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const WebTemplatePage1 = (props) => {
	const classes = useStyles();
	const { loading = false } = props;

	return (
		<Box className={classes.root}>
			<Box className={classes.leftContainer}>
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
							'Insert Content Here'
						)
					}
				/>
			</Box>
			<Box className={classes.rightContainer}>
				<Box className={classes.container}>
					<CardHeader
						title={
							loading ? (
								<Skeleton
									className={classes.title}
									width={600}
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
								<Skeleton width={500} height={400} margin={0} padding={0} />
							) : (
								'Insert Content Here'
							)
						}
					/>
					<CardHeader
						subheader={
							loading ? (
								<Skeleton
									className={classes.title}
									width={400}
									height={50}
									m={0}
									p={0}
								/>
							) : (
								'Insert More Content Here'
							)
						}
					/>
					<CardHeader
						subheader={
							loading ? (
								<Skeleton className={classes.text_4} width={60} height={55} />
							) : (
								'That`s right; Insert Even More Content Here'
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
		height: '89vh',
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'space-evenly',
		padding: 50,
		marginTop: '75px',
	},
	leftContainer: {
		width: '40%',
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'center',
		alignItems: 'center',
		background: '#F6F6F6',
		// border: '1px solid #F8F8F8',
	},
	rightContainer: {
		width: '40%',
		display: 'flex',
		flexFlow: 'column wrap',
		justifyContent: 'center',
		padding: 30,
		background: '#F6F6F6',
	},
	container: {
		width: '100%',
	},
	title: {
		width: '15%',
		height: 30,
		margin: '5px',
	},
}));

const ColorButton = withStyles((theme) => ({
	root: {
		color: theme.palette.getContrastText(blue[600]),
		backgroundColor: blue[600],
		'&:hover': {
			backgroundColor: blue[800],
		},
	},
}))(Button);

export default WebTemplatePage1;
