import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppIcon from '../../assets/omega-mobile-icon.png';
import BG1 from '../../assets/BG1.png';
import { blue } from '@material-ui/core/colors';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const WebTemplatePage2 = (props) => {
	const classes = useStyles();
	const { loading = false } = props;

	return (
		<Box className={classes.root}>
			<Box className={classes.centerContainer}>
				<Box className={classes.container}>
					<CardHeader
						avatar={
							loading ? (
								<Skeleton
									className={classes.title}
									width={600}
									height={100}
									m={0}
									p={0}
								/>
							) : (
								<img src={AppIcon} alt='App Icon' />
							)
						}
					/>
					<CardHeader
						subheader={
							loading ? (
								<Skeleton width={500} height={400} margin={0} padding={0} />
							) : (
								<Typography variant='h4'>Omega 2020</Typography>
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
								<Typography variant='h5'>
									Coming soon to app stores near you : &#41;
								</Typography>
							)
						}
					/>
					<CardHeader
						subheader={
							loading ? (
								<Skeleton className={classes.text_4} width={60} height={55} />
							) : (
								<ColorButton
									variant='contained'
									color='primary'
									size='large'
									href='https://github.com/JessicaDosseh/Omega-Web-App'
								>
									GitHub
								</ColorButton>
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
		height: '60vh',
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'space-evenly',
		// marginTop: '75px',
		backgroundImage: `url(${BG1})`,
		backgroundSize: 'cover',
	},
	centerContainer: {
		width: '40%',
		display: 'flex',
		flexFlow: 'column wrap',
		justifyContent: 'center',
		padding: 30,
	},
	container: {
		width: '100%',
		display: 'flex',
		flexFlow: 'column wrap',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		color: 'white',
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

export default WebTemplatePage2;
