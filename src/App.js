import React from "react";
import Avatar from "sanjayrajpurohit/avatar/build";
import Title from "sanjayrajpurohit/title";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Title title="Sanjay" />
        <div
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
        </div>
      </div>
    );
  }
}

export default App;
