import React from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch, { SwitchClassKey, SwitchProps } from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const IOSSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 260,
      height: 34,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        transform: "translateX(178px)",
        color: theme.palette.common.white,
        "& + $track": {
          backgroundColor: "#52d869",
          opacity: 1,
          border: "none",
        },
      },
      "&$focusVisible $thumb": {
        color: "#52d869",
        border: "6px solid #fff",
      },
    },
    thumb: {
      width: 78,
      height: 29,
      borderRadius: 31 / 2,
    },
    track: {
      borderRadius: 31 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {},
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
        label="iOS style"
      />
    </FormGroup>
  );
}
