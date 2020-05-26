# Skeleton Templates

>> The purpose of skeletons is to create reusable templates to minimize the amount of time spent on styling. As of right now, it's not as reusable as it could be; however, ideally, we would be passing information into the skeletons through a database instead of hard coding it. In addition to this, we need to figure out how to set up consistent styling components. 


## Example Templates 

| Skeleton Template | Skeleton Template In Use |
| ---------- | ---------- |
| ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FJessicaDosseh%2F-spaoud7h_.png?alt=media&token=0477d1a0-1d78-4edc-943c-c965d675e129) | ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FJessicaDosseh%2FQWaqSQXIVO.png?alt=media&token=bcf5d925-2e8d-4ec4-ae2a-af287f187923) |

---

> Code Snippet 

```js
import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
								<Insert Content Here/>
							)
						}
					/>
					<CardHeader
						subheader={
							loading ? (
								<Skeleton width={500} height={400} margin={0} padding={0} />
							) : (
								<Insert Content Here/>
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
								<Insert Content Here/>
							)
						}
					/>
					<CardHeader
						subheader={
							loading ? (
								<Skeleton className={classes.text_4} width={60} height={55} />
							) : (
								<Insert Content Here/>
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
```

---

> ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FJessicaDosseh%2FZt2ectImPo.png?alt=media&token=f6f8564b-64c9-42dd-8997-3fa73587de2e)

---

> ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FJessicaDosseh%2FlsixKuK384.png?alt=media&token=9503ec4a-c0f4-4268-84f4-a5c38f803d1d)

---

> ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FJessicaDosseh%2FRNwjZjNZCU.png?alt=media&token=327e67f1-c678-464b-8f29-a5eac18de165)

