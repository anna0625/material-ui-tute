import { ListItemText, makeStyles } from "@material-ui/core";
import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
// className doesn't work with @mui/material/ListItem
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { AddCircleOutline, SubjectOutlined } from "@mui/icons-material";
import { useHistory, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import { format } from "date-fns";
import Avatar from "@material-ui/core/Avatar";

const drawerWidth = 240;

// pass a function return an object
const useStyle = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      // 24 px 8*3
      padding: theme.spacing(3),
    },
    page: {
      background: "#ffffff",
      width: "100%",
    },
    drawer: {
      width: drawerWidth,
    },
    drawPaper: {
      width: drawerWidth,
    },
    active: {
      background: "#f2f2f2",
    },
    title: {
      padding: theme.spacing(2.5),
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

export const Layout = ({ children }) => {
  const classes = useStyle();
  const histry = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutline color="secondary" />,
      path: "/create",
    },
  ];
  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar elevation={1} className={classes.appbar}>
        <ToolBar>
          <Typography className={classes.date}>
            Today is the {format(new Date(), "do MMMM Y")}.
          </Typography>
          <Typography>Anna</Typography>
          <Avatar
            src="https://picsum.photos/200"
            alt="profile"
            className={classes.avatar}
          />
        </ToolBar>
      </AppBar>
      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Anna notes
          </Typography>
        </div>
        {/* list /links */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => histry.push(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};
