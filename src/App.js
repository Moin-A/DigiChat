import React from "react";
import logo from "./logo.svg";
import Header from "./Header";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import styled from "styled-components";
import "./App.css";
import Sidebar from "./Sidebar";
import Chatlist from "./Chatlist";
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
function App() {
  const Styleddiv = styled.div`
    grid-template-rows: 13vh 120vh 10vh;
    grid-gap: 2rem;
    background: inherit;
    scrollbar-width: thin;
    .makeStyles-root-33 {
      width: 0;
    }

    .MuiDrawer-paperAnchorDockedLeft {
      top: 7rem;
      height: 84%;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
      justify-content: center;
      /* color: "#4d7cff"; */
      background: #30376a;
      color: white;
      scrollbar-width: thin;
    }
    .MuiListItem-button {
      display: grid;
      justify-content: center;
      text-align: center;
      scrollbar-width: thin;
    }
    .MuiListItemIcon-alignItemsFlexStart {
      justify-content: center;
      color: white;
      scrollbar-width: thin;
    }
    .MuiSvgIcon-root {
      font-size: 2rem;
      scrollbar-width: thin;
    }

    /* //-----------------------// */

    .makeStyles-root-13 {
      top: 2rem;
      left: 9rem;
      background: inherit;
    }
    .ListItem {
      min-width: 1.8rem;
      margin-bottom: 0px;
    }
    .label {
      right: 13rem;
    }
    .labeltext {
      color: white;
      span {
        width: 8rem;
      }
    }
    .label2 {
      right: 23rem;
    }
    .Moin {
      background-color: "red";
    }

    .VirtualisedListCard {
      display: flex;
      width: 5rem;
      .MuiTypography-displayBlock {
        display: flex;
        svg {
          font-size: 0.8rem;
        }
      }
      .MuiBadge-badge {
        left: 22px;
        top: 4px;
      }
    }

    .Avatar {
      width: 3.5rem;
      height: 3.5rem;
      margin-right: 1rem;
    }
  `;

  const theme = createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "*::-webkit-scrollbar": {
            width: "0.4em",
            Color: "",
            background: "#5980b01f",
          },
          html: {
            background: "#2d3258e8",
          },
          "*::-webkit-scrollbar-track": {
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#1754feb5",
            outline: "1px solid slategrey",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Styleddiv>
        <Header />
        <Sidebar style={{ position: "relative" }} />
        <Chatlist />
      </Styleddiv>
    </ThemeProvider>
  );
}

export default App;
