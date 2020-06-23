import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "9rem",
      maxwidth: "90%",
      fontSize: "17px",
      maxWidth: 40,
      color: "",
      position: "relative",
    },
  })
);

export default function FolderList(props) {
  const classes = useStyles();

  return (
    <List className={classes.root} style={{ fontSize: "2px" }}>
      <ListItem className={props.label}>
        <ListItemAvatar className="ListItem">
          <Avatar
            style={{
              fontSize: "7px",
              width: "15px",
              height: "15px",
              margin: 0,
              position: "sticky",
            }}
            className="Moin"
          >
            34
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          className="labeltext"
          primary={props.text}
          style={{ fontSize: "4px" }}
        />
      </ListItem>
    </List>
  );
}
