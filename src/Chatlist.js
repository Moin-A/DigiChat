import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Searchbar from "./Searchbar";
import AvatarHor from "./AvatarHor";
import Switch from "./Switch";
import Moin from "./VirtualisedListScroll";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "60%",
      maxWidth: "40ch",
      backgroundColor: theme.palette.background.paper,
      position: "fixed",
      marginTop: "5rem",
      background: "#5980b01f",
    },
    inline: {
      display: "inline",
    },
  })
);

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Searchbar />
      <Typography
        Typography
        variant="subtitle2"
        display="block"
        gutterBottom
        style={{ margin: "-0.5rem 0.9rem", marginTop: "4px", width: "60%" }}
      >
        Pinned Chats
      </Typography>

      <AvatarHor />
      <Switch />
      <Moin />
    </List>
  );
}
