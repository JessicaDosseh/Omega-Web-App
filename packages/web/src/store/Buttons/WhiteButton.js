import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { blue, grey } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const WhiteButton = (props) => {
  return (
    <ColorButton size='large' variant='outlined' color={blue.A700}>
      <Typography variant='caption'>{props.title}</Typography>
    </ColorButton>
  );
};

const ColorButton = withStyles(() => ({
  root: {
    padding: '5px 40px 5px 40px',
    color: blue.A700,
    backgroundColor: grey[50],
    '&:hover': {
      backgroundColor: grey[300],
    },
    textTransform: 'none',
  },
}))(Button);

export default WhiteButton;
