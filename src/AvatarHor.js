import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import StyleBadge from "./Stylebadge";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",

      "& > *": {
        margin: theme.spacing(-1, -2),
        justifyItems: "center",
        display: "grid",
      },
    },
  })
);

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <StyleBadge />
          <Avatar
            style={{ margin: "auto" }}
            alt="Cindy Baker"
            src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg"
          />
        </ListItemAvatar>
        <ListItemText primary="Photos" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <StyleBadge />
          <Avatar
            style={{ margin: "auto" }}
            alt="Cindy Baker"
            src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
          />
        </ListItemAvatar>
        <ListItemText primary="Photos" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <StyleBadge />
          <Avatar
            style={{ margin: "auto" }}
            alt="Cindy Baker"
            src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1003.jpeg"
          />
        </ListItemAvatar>
        <ListItemText primary="Photos" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <StyleBadge />
          <Avatar
            style={{ margin: "auto" }}
            alt="Cindy Baker"
            src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1003.jpeg"
          />
        </ListItemAvatar>
        <ListItemText primary="Photos" />
      </ListItem>
    </div>
  );
}
