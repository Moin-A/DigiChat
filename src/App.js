import React from "react";
import logo from "./logo.svg";
import Header from "./Header";
import "./App.css";
import styled from "styled-components";
import "./App.css";
import Sidebar from "./Sidebar";
import Chatlist from "./Chatlist";

function App() {
  const Styleddiv = styled.div`
    grid-template-rows: 13vh 120vh 10vh;
    grid-gap: 2rem;

    .MuiDrawer-paperAnchorDockedLeft {
      top: 7rem;
      height: 84%;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
      justify-content: center;
      /* color: "#4d7cff"; */
      background: #30376a;
      color: white;
    }
    .MuiListItem-button {
      display: grid;
      justify-content: center;
      text-align: center;
    }
    .MuiListItemIcon-alignItemsFlexStart {
      justify-content: center;
      color: white;
    }
    .MuiSvgIcon-root {
      font-size: 2rem;
    }

    /* //-----------------------// */

    .makeStyles-root-13 {
      top: 2rem;
      left: 9rem;
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
  `;

  return (
    <Styleddiv>
      <Header />
      <Sidebar style={{ position: "relative" }} />
      <Chatlist />
    </Styleddiv>
  );
}

export default App;
