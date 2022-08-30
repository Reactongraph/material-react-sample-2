import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import car1 from "../../images/car1.jpg";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

const Home = (props) => {
  const { classes } = props;
  return (
    <Grid className={classes.root}>
      <Grid container className="About_wrapper ">
        <Grid
          container
          spacing={8}
          className="About_wrapper container random-image"
        >
          <Grid item md={3} sm={6} xs={6} className="img-wrap">
            <img alt="Car" src={car1} className="img-circle img-responsive" />
          </Grid>
          <Grid item md={3} sm={6} xs={6} className="img-wrap">
            <img alt="Car" src={car1} className="img-circle img-responsive" />
          </Grid>
          <Grid item md={3} sm={6} xs={6} className="img-wrap">
            <img alt="Car" src={car1} className="img-circle img-responsive" />
          </Grid>
          <Grid item md={3} sm={6} xs={6} className="img-wrap">
            <img alt="Car" src={car1} className="img-circle img-responsive" />
          </Grid>
        </Grid>
        <Typography
          component="h2"
          color="inherit"
          align="center"
          className="About-heading"
        >
          <span>A</span>bout Us
        </Typography>
        <Typography component="h5" color="inherit" className="About-heading2">
          Roin vel enim nec ipsum finibus.Duis euismod massa utab.
        </Typography>
        <Grid item md={6} sm={6} xs={6} className="About-para">
          <Typography component="p" color="inherit" className="span">
            Duis euismod massa ut sem fringilla blandit. Proin vel enim nec
            ipsum finibus.Duis euismod massa ut sem fringilla blandit. Proin vel
            enim nec ipsum finibus.Duis euismod massa ut sem fringilla blandit.
            Proin vel enim nec ipsum finibus.Duis euismod massa ut sem fringilla
            blandit. Proin vel enim nec ipsum finibus. Duis euismod massa ut sem
            fringilla blandit. Proin vel enim nec ipsum finibus.Duis euismod
            massa ut sem fringilla blandit. Proin vel enim nec ipsum
            finibus.Duis euismod massa ut sem fringilla blandit. Proin vel enim
            nec ipsum.
          </Typography>
        </Grid>
        <Grid container spacing={8} className="about-img-wrapper">
          <Grid item md={6} sm={12} xs={12} className="img-wrap">
            <img alt="Car" src={car1} />
          </Grid>
          <Grid item md={6} sm={12} xs={12} className="img-wrap second-image">
            <img alt="Car" src={car1} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
