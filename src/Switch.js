import React from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import CusstomLabel from "./Customlabel";
import CusstomLabel2 from "./Customlabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch, { SwitchClassKey, SwitchProps } from "@material-ui/core/Switch";

import WorkIcon from "@material-ui/icons/Work";

const IOSSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 212,

      height: 34,
      padding: 0,
      margin: theme.spacing(1, 2),
    },
    switchBase: {
      padding: 1,

      "&$checked": {
        marginTop: "1.3px",
        backgroundColor: theme.palette.grey[12],
        transform: "translateX(108px)",
        color: theme.palette.common.blue,
        "& + $track": {
          opacity: 1,
          border: "none",
          backgroundColor: "#2d3258",
        },
      },
      "&$focusVisible $thumb": {
        color: "#52d869",

        border: "6px solid #fff",
      },
    },
    thumb: {
      width: 100,
      height: 29,
      borderRadius: 31 / 2,
      backgroundColor: theme.palette.grey[12],
      color: "#4d7cff",
      checked: {
        backgroundColor: "#2d3258",
        color: "#4d7cff",
      },
    },
    track: {
      borderRadius: 31 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: "#2d3258",
      color: "#4d7cff",
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {
      backgroundColor: "#4d7cff",
      color: "#4d7cff",
    },
    focusVisible: {},
  })
)(({ classes, ...props }: Props) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export default function CustomizedSwitches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  debugger;
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <IOSSwitch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
          />
        }
        label={
          state.checkedB ? (
            <CusstomLabel label={"label"} text="Recent Chats" />
          ) : (
            <CusstomLabel2 label={"label2"} text="All Chats" />
          )
        }
      />
    </FormGroup>
  );
}
