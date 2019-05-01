import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

const Home = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            {/* <Grid container spacing={8} className="About_wrapper container"></Grid> */}
            <Grid container spacing={8} className="About_wrapper ">
                <Grid container spacing={8} className="About_wrapper container random-image">
                    <Grid item md={3} sm={6} xs={6} className="img-wrap" >
                        <img src={require("../../images/car1.jpg")} className="img-circle img-responsive" />
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} className="img-wrap" >
                        <img src={require("../../images/car1.jpg")} className="img-circle img-responsive" />
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} className="img-wrap" >
                        <img src={require("../../images/car1.jpg")} className="img-circle img-responsive" />
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} className="img-wrap" >
                        <img src={require("../../images/car1.jpg")} className="img-circle img-responsive" />
                    </Grid>
                </Grid>
                <Typography component="h2" color="inherit" align="center" className="About-heading">
                    <span>A</span>bout Us
               </Typography>
                <Typography component="h5" color="inherit" className="About-heading2">
                    Roin vel enim nec ipsum finibus.Duis euismod massa utab.
               </Typography>
                <Grid item md={6} sm={6} xs={6} className="About-para" >
                    <Typography component="p" color="inherit" className="span" >
                        Duis euismod massa ut sem fringilla blandit. Proin vel enim nec ipsum finibus.Duis euismod massa ut sem fringilla blandit. Proin vel enim nec ipsum finibus.Duis euismod massa ut sem fringilla blandit.
                        Proin vel enim nec ipsum finibus.Duis euismod massa ut sem fringilla blandit. Proin vel enim nec ipsum finibus.
                        Duis euismod massa ut sem fringilla blandit. Proin vel enim nec ipsum finibus.Duis euismod massa ut sem fringilla blandit. Proin vel enim nec ipsum finibus.Duis euismod massa ut sem fringilla blandit. Proin vel enim nec ipsum.
                    </Typography>
                </Grid>
                <Grid container spacing={8} md={6} className="about-img-wrapper">
                    <Grid item md={6} sm={12} xs={12} className="img-wrap" >
                        <img src={require("../../images/car1.jpg")} className="" />
                        {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className="avatar-left2" /> */}
                    </Grid>
                    <Grid item md={6} sm={12} xs={12} className="img-wrap second-image" >
                        <img src={require("../../images/car1.jpg")} className="" />
                        {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className="avatar-left2" /> */}
                    </Grid>
                </Grid>
            </Grid>
        </div >
    );
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
