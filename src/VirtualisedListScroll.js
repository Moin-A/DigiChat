import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import StyleBadge from "./Stylebadge";
import Divider from "@material-ui/core/Divider";
import VolumeMuteIcon from "@material-ui/icons/VolumeMute";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "0",
      height: 500,
      maxWidth: 210,
      backgroundColor: theme.palette.background.paper,
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  })
);

function renderRow(props: ListChildComponentProps) {
  const { index, style } = props;

  return (
    <ListItem
      button
      style={style}
      key={index}
      className={"VirtualisedListCard"}
    >
      <StyleBadge style={{ left: "36px", top: "12px" }} />
      <Avatar
        className="Avatar"
        src={`https://panorbit.in/wp-content/uploads/2019/hotlink-ok/100${
          index + 1
        }.jpeg`}
      />
      <Divider
        style={{
          position: "absolute",
          width: "90%",
          top: "4rem",
          height: "1px",
        }}
      />
      <ListItemText
        primary={
          <div className="VirtualizedList_ListText">
            <span className="Span">Moin</span>
            <VolumeMuteIcon />
          </div>
        }
        secondary={` Meet me @ the park`}
      ></ListItemText>
      <span style={{ color: "white" }}>3min</span>
    </ListItem>
  );
}

export default function VirtualizedList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FixedSizeList
        height={330}
        width={215}
        itemSize={40}
        itemCount={60}
        style={{ display: "flex" }}
      >
        {renderRow}
      </FixedSizeList>
    </div>
  );
}
