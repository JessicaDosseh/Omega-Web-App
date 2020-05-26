import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import userIcon from '../../assets/user-icon.png';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const AvatarElement = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = open;
	}, [open]);

	return (
		<Box>
			<Avatar
				className={classes.blue}
				ref={anchorRef}
				aria-controls={open ? 'menu-list-grow' : undefined}
				aria-haspopup='true'
				onClick={handleToggle}
			>
				A
			</Avatar>
			<Popper
				// placement='bottom-end'
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				transition
				disablePortal
			>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin:
								placement === 'bottom-end' ? 'bottom-end' : 'bottom-end',
						}}
					>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList
									autoFocusItem={open}
									id='menu-list-grow'
									onKeyDown={handleListKeyDown}
								>
									<MenuItem className={classes.root} onClick={handleClose}>
										<img src={userIcon} alt='user icon' width={70} />
										<br />
										<Typography>User Name</Typography>
										<Typography>username@email.com</Typography>
										<br />
									</MenuItem>
									<MenuItem className={classes.root} onClick={handleClose}>
										My account
									</MenuItem>
									<MenuItem className={classes.root} onClick={handleClose}>
										Logout
									</MenuItem>
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</Box>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		display: 'flex',
		flexFlow: 'column wrap',
		justifyContent: 'flex-end',
		alignContent: 'flex-end',
		background: '#FFFFFF',
	},
	avatar: {
		marginRight: '10px',
		marginLeft: '25px',
	},
	paper: {
		marginRight: theme.spacing(3),
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

export default AvatarElement;
