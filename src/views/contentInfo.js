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
import ProfileImg from '../assets/image 17.svg'
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
  socialMediaBtn: {
    display:'inline-flex',
    width:61,
    height:56,
    backgroundColor:"#C4C4C4",
    marginRight:31,
    boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",
    alignItems:"center",
    justifyContent:"center",
    marginTop:126,
    '& svg':{
      fontSize:35
    }
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
        <Grid container>
          <Grid item lg={12}>
            <Typography variant="h5" className={clsx(classes.titleHi,classes.titleTypo)}>
              Hi, I am
            </Typography>
          </Grid>
          <Grid item lg={12}>
            <Typography variant="h3" className={classes.titleTypo}>
              Donni Septian Silalahi 
            </Typography>
            <Typography variant="h4" className={classes.subtitle}>
              CEO / Matahari
            </Typography>
          </Grid>
          <Grid item lg={12}>
            {socialMedias.map((sm)=>
            <a key={sm.link} href={sm.link} className={classes.socialMediaBtn}>
              {sm.icons}
            </a>
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={6}>
          <img
          src={ProfileImg}
          alt="Dons"
          width="655"
          />
      </Grid>
    </Grid>
  )

}
export default ContentInfo;