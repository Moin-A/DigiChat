import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MoreHorizRoundedIconRound from "@material-ui/icons/MoreHorizRounded";
import SearchIcon from "@material-ui/icons/Search";
import PhoneIcon from "@material-ui/icons/Phone";
import StarIcon from "@material-ui/icons/Star";
import VideocamRoundedIcon from "@material-ui/icons/VideocamRounded";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "#2d3259",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#2d3259" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            DigiCollect
          </Typography>

          <div>
            <IconButton
              style={{
                fontSize: 31,
              }}
            >
              <AccountCircle
                style={{
                  color: "#4d7cff",
                  background: "#30376a",
                  borderRadius: "50%",
                  fontSize: 32,
                }}
                fontSize="large"
              />
            </IconButton>
          </div>
          <div>
            <IconButton
              colorPrimary="secondary"
              aria-label="delete"
              className={classes.margin}
              colorSecondary="primary"
            >
              <MoreHorizRoundedIconRound
                style={{
                  color: "#4d7cff",
                  background: "#30376a",
                  borderRadius: "50%",
                  fontSize: 27,
                }}
                size="medium"
              />
            </IconButton>
          </div>
          <div>
            <IconButton
              colorPrimary="secondary"
              aria-label="delete"
              className={classes.margin}
              colorSecondary="primary"
            >
              <StarIcon
                style={{
                  color: "#30376a",
                  background: "#4d7cff",
                  borderRadius: "50%",
                  fontSize: 27,
                }}
                size="medium"
              />
            </IconButton>
          </div>
          <div>
            <IconButton
              colorPrimary="secondary"
              aria-label="delete"
              className={classes.margin}
              colorSecondary="primary"
              size="medium"
            >
              <SearchIcon
                style={{
                  color: "#4d7cff",
                  background: "#30376a",
                  borderRadius: "50%",
                  fontSize: 27,
                }}
                size="medium"
              />
            </IconButton>
          </div>
          <div>
            <IconButton
              colorPrimary="secondary"
              aria-label="delete"
              className={classes.margin}
              colorSecondary="primary"
              size="medium"
            >
              <PersonAddRoundedIcon
                style={{
                  color: "#4d7cff",
                  background: "#30376a",
                  borderRadius: "50%",
                  fontSize: 27,
                }}
                size="medium"
              />
            </IconButton>
          </div>
          <div>
            <IconButton
              colorPrimary="secondary"
              aria-label="delete"
              className={classes.margin}
              colorSecondary="primary"
              size="medium"
            >
              <PhoneIcon
                fontSize="small"
                style={{
                  color: "#4d7cff",
                  background: "#30376a",
                  borderRadius: "50%",
                  fontSize: 27,
                }}
              ></PhoneIcon>
            </IconButton>
          </div>
          <div>
            <IconButton
              colorPrimary="secondary"
              aria-label="delete"
              className={classes.margin}
              colorSecondary="primary"
            >
              <VideocamRoundedIcon
                style={{
                  color: "#30376a",
                  background: "#4d7cff",
                  borderRadius: "50%",
                  fontSize: 27,
                }}
                size="medium"
              />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
