// import React from "react";
import "./App.css";
// import { Avatar } from "@sanjayrajpurohit/avatar";
import Title from "@sanjayrajpurohit/title";
const React = require("react");
// import Avatar from "./lib/avatar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Title title="Sanjay" />
        {/* <div
          className="avatar-container"
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   alignItems: "center",
          //   justifyContent: "center",
          // }}
        >
          <Avatar showOverlayOnHover={true}>
            <span> Username</span>
          </Avatar>{" "}
        </div> */}
      </div>
    );
  }
}

export default App;
