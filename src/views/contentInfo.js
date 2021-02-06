import React from 'react';
import {
  Container,
  makeStyles,
  Typography,
  Grid
}
  from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  titleTypo:{
    fontWeight:700
  },
  subtitle:{
    fontWeight:800,
    fontSize:25,
    color:"#909090",
  },
  titleHi: {
    marginBottom: 54
  }

}));
const ContentInfo = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center">
      <Grid item lg={6}>
        <Typography variant="h5" className={clsx(classes.titleHi,classes.titleTypo)}>
          Hi, I am
          </Typography>
        <Typography variant="h3" className={classes.titleTypo}>
          Donni Septian Silalahi 
          </Typography>
          <Typography variant="h4" className={classes.subtitle}>
            CEO / Matahari
          </Typography>
      </Grid>
    </Grid>
  )

}
export default ContentInfo;