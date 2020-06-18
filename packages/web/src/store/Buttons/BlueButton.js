import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const BlueButton = (props) => {
  return (
    <ColorButton size='large' href={props.href}>
      <Typography variant='body2'>{props.title}</Typography>
    </ColorButton>
  );
};

const ColorButton = withStyles((theme, props) => ({
  root: {
    padding: '15px 40px 15px 40px',
    color: theme.palette.getContrastText(blue.A700),
    backgroundColor: blue.A700,
    '&:hover': {
      backgroundColor: blue[800],
    },
    textTransform: 'none',
  },
}))(Button);

export default BlueButton;
