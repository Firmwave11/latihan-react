import React from 'react';
import {
  Container,
  makeStyles,
  Typography,
  Grid
}
  from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  titleHi: {
    marginBottom: 54
  }
}));
const ContentInfo = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center">
      <Grid item lg={6}>
        <Typography variant="h5" className={classes.titleHi}>
          Hi, I am
          </Typography>
        <Typography variant="h3" className={classes.titleHi}>
          Rama Sapto <br />
            Front-end Developer / UI Designer
          </Typography>
      </Grid>
    </Grid>
  )

}
export default ContentInfo;