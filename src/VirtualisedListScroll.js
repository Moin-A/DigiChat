import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: 400,
      maxWidth: 210,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

function renderRow(props: ListChildComponentProps) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItem>
  );
}

export default function VirtualizedList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FixedSizeList height={300} width={220} itemSize={40} itemCount={40}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
}
