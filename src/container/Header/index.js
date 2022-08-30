import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const drawerWidth = 240;

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const styles = (theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      display: "none",
    },
  },
  appBar: {
    background: "#1b1c1d",
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100%)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(),
    fontSize: "15px",
    color: "#ffffff",
    position: "relative",
    top: "4px",
  },
  paper: {
    position: "absolute",
    width: theme.spacing(50),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none",
  },
});

// class ResponsiveDrawer extends React.Component {
//   state = {
//     mobileOpen: false,
//     open: false,
//   };
const ResponsiveDrawer = (props) => {
  const { classes, theme } = props;

  const [state, setState] = useState({
    mobileOpen: false,
    open: false,
  });

  const handleDrawerToggle = () => {
    setState((state) => ({ ...state, mobileOpen: !state.mobileOpen }));
  };

  const handleOpen = (value) => {
    setState({ ...state, open: true, formValue: value });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  //   render() {

  const drawer = (
    <div>
      <div className="cutsm">
        <div className="content-wrap">
          {/* <img src={require("../../images/car1.jpg")} /> */}
          <h4 align="center">welcome</h4>
          <h6 align="center">jain@gmail.com</h6>
        </div>
      </div>
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className="head_wrapper">
          <Typography
            component="div"
            color="inherit"
            noWrap
            className="header-right-left"
          >
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className="header-logo">
              Jaguar App
            </Typography>
          </Typography>
          <Typography
            component="div"
            color="#000"
            noWrap
            className="header-right-ul"
          >
            <Button
              color="primary"
              className={classes.button}
              onClick={() => handleOpen("login")}
            >
              Login
            </Button>
            <Button
              color="primary"
              className={classes.button}
              onClick={() => handleOpen("signup")}
            >
              Sign Up
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={props.container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={state.mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={`banner ${classes.content}`}>
        <div className="banner-content">
          <div className="baner-info container">
            <h4>HANDCRAFTED</h4>
            <h3>Jaguaar C-Type</h3>
            <p>Itaque earum rerum hic tenetur a sapiente delectus</p>
            <a className="banner_btn" href="#">
              {" "}
              read more
            </a>
          </div>
        </div>
      </main>
    </div>
  );
  //   }
};

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
