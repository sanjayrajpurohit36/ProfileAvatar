import "./App.css";
import Avatar from "./avatar/src/avatar";
function App() {
  return (
    <div className="App">
      <div
        className="avatar-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar showOverlayOnHover={true}>
          <span> Username</span>
        </Avatar>{" "}
      </div>
    </div>
  );
}

export default App;
