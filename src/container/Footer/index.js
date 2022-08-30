import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

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

const Footer = () => {
  return (
    <Grid container className="Footer_wrapper container ">
      <Typography component="div" className="footer-ul-wrap">
        <List className="footer-ul">
          {["Inbox", "Starred", "Send email", "Gallery"].map((text, index) => (
            <ListItem key={text}>{text}</ListItem>
          ))}
        </List>
      </Typography>

      <Grid container>
        <Grid item md={3}>
          <Typography component="div" className="footer-content-wrap">
            <h3>Jaguaar</h3>
            <h5>ABOUT US</h5>
            <Typography component="p" className="footer-content-para">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              atus error sit volupt unde omnis iste iatis un.
            </Typography>
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Grid container spacing={8} className="center-footer">
            <Grid item md={3}>
              <List className="footer-section1-ul">
                {["Inbox", "Starred", "Send email"].map((text, index) => (
                  <ListItem key={text}>{text}</ListItem>
                ))}
              </List>
            </Grid>
            <Grid item md={3}>
              <List className="footer-section1-ul">
                {["Inbox", "Starred", "Send email"].map((text, index) => (
                  <ListItem key={text}>{text}</ListItem>
                ))}
              </List>
            </Grid>
            <Grid item md={3}>
              <List className="footer-section1-ul">
                {["Inbox", "Starred", "Send email"].map((text, index) => (
                  <ListItem key={text}>{text}</ListItem>
                ))}
              </List>
            </Grid>
            <Grid item md={3}>
              <List className="footer-section1-ul">
                {["Inbox", "Starred", "Send email"].map((text, index) => (
                  <ListItem key={text}>{text}</ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3}>
          Duis euismod massa ut sem fringilla blandit. Proin vel enim nec ipsum
          finibus.Duis euismod massa ut sem fringilla blandit.
        </Grid>
        <Grid item md={12} className="footer-last">
          © {new Date().getFullYear()}Beverages. All Rights Reserved | Design by
          W3layouts
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
