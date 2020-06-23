import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      display: "flex",
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export default function CheckboxListSecondary() {
  const classes = useStyles();

  return (
    <List dense className={classes.root} style={{}}>
      <ListItem key={1} button>
        <ListItemAvatar>
          <Avatar
            alt={`Avatar n°${1 + 1}`}
            src={`/static/images/avatar/${1 + 1}.jpg`}
          />
        </ListItemAvatar>
        <div>
          <ListItemText id={1} primary={`Line item ${1 + 1}`} />
          <ListItemText id={2} primary={`Line item ${1 + 1}`} />
        </div>

        <ListItemSecondaryAction>Helo</ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}
