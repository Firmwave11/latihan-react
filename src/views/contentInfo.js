import React from 'react';
import {
  Container,
  makeStyles,
  Typography,
  Grid
}
  from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  titleHi:{
    marginBottom:54
  }
}));
const ContentInfo = () =>{
  const classes = useStyles();
  return (
      <Grid container alignItems="center">
        <Grid item lg={6}>
          <Typography variant="h5" className={classes.titleHi}>
            Hi, I am
          </Typography>
        </Grid>
      </Grid>
    )

}
export default ContentInfo;