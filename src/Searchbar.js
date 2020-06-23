import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 2px",
      display: "flex",
      alignItems: "center",
      width: 209,
      borderRadius: 29,
      fontSize: 21,
    },
    input: {
      marginLeft: theme.spacing(0),
      flex: 1,
    },
    iconButton: {
      padding: 0,

      justifyContent: "center",
    },
  })
);

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper
      component="form"
      className={classes.root}
      style={{ height: "3rem", marginLeft: "0.7rem" }}
    >
      <SearchIcon style={{ marginLeft: "1rem" }} />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <InputBase
          className={classes.input}
          placeholder="Search"
          inputProps={{ "aria-label": "search google maps" }}
        />
      </IconButton>
    </Paper>
  );
}
