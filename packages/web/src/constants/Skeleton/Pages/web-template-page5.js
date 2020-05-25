import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { blue } from '@material-ui/core/colors';
import { makeStyles, withStyles } from '@material-ui/core/styles';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const WebTemplatePage5 = (props) => {
	const classes = useStyles();
	const { loading = false } = props;

	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box className={classes.root}>
			<Box className={classes.itemBar}>
				<CardHeader
					title={
						loading ? (
							<Skeleton width='100%' />
						) : (
							<Box className={classes.mainContainer}>
								<AppBar position='static' color='default'>
									<Tabs
										value={value}
										onChange={handleChange}
										// indicatorColor='primary'
										// textColor='primary'
										aria-label='simple tabs example'
									>
										<Tab label='Item One' {...a11yProps(0)} />
										<Tab label='Item Two' {...a11yProps(1)} />
										<Tab label='Item Three' {...a11yProps(2)} />
									</Tabs>
								</AppBar>
								<TabPanel value={value} index={0}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</TabPanel>
								<TabPanel value={value} index={1}>
									STUFF
								</TabPanel>
								<TabPanel value={value} index={2}>
									Item <br />
									Item <br />
									Item
								</TabPanel>
							</Box>
						)
					}
				/>
			</Box>
		</Box>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100vw',
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'space-evenly',
		// marginTop: '75px',
		// border: '2px solid red',
	},
	itemBar: {
		width: '100%',
		padding: 0,
		margin: 0,
		// background: '#F8F8F8',
	},
	mainContainer: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
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

export default WebTemplatePage5;
