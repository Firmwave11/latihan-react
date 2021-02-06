import React from 'react';
import {
  Container,
  makeStyles,
  Typography,
  Grid,
  ListItemIcon
}
  from '@material-ui/core';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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
  },
  socialMedia: {
    display:'flex',

  }
}));
const ContentInfo = () => {
  const socialMedias = [
    {
      icons:(<AlternateEmailIcon/>),
      link:"gmail.com/donisilalahi69",
    },
    {
      icons:(<GitHubIcon/>),
      link:"github.com/DonniCeoOK",
    },  
    {
      icons:(<LinkedInIcon/>),
      link:"Linkedin.com/donniPS",
    }
  ]
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
        <div className={classes.socialMedia}>
          {socialMedias.map((sm)=>
          <a key={sm.link} href={sm.link}>
            {sm.icons}
          </a>
          )}
        </div>
      </Grid>
    </Grid>
  )

}
export default ContentInfo;