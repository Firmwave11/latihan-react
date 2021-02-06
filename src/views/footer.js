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
const Footer = () => {
    const classes = useStyles();
    return (
        <Grid container alignItems="center">
            <Grid item lg={12}>
                <Typography variant="h5" className={classes.titleHi}>
                    IT BERRIES
          </Typography>
                <Typography variant="body2" className={classes.titleHi}>
                    Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra.
                    In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue,
                    in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget
                    enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor,
                    accumsan nec eros.
          </Typography>
                <Typography variant="h5" className={classes.titleHi}>
                    READ MORE
          </Typography>
            </Grid>
        </Grid>
    )

}
export default Footer;