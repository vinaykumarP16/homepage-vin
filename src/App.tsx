import React from "react";
import "./App.css";
import { Homepage } from "./Homepage/Homepage";
import { Deadlines } from "./Deadlines/Deadlines";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MilestonesTracker from "./MilestonesTracker/MilestonesTracker";

function App() {
  const [showDeadlines, setShowDeadlines] = React.useState<boolean>(false);
  return (
    <div className="App">
      <h1 style={{ color: "red" }}> You got this DUDE 😎 | Keep Rocking !</h1>
      <Homepage />
      <h1 style={{ color: "red" }}>You Can | Never Stop Dreaming </h1>

      <IconButton onClick={() => setShowDeadlines(!showDeadlines)}>
        <VisibilityIcon color="warning" /><span style={{ color: "white", marginLeft:'10px', fontSize:'25px' }}>16</span>
      </IconButton>
      {showDeadlines && (
        <div>
          <h4>Achievements / Goals to be done by September</h4> <Deadlines />
          <MilestonesTracker />
        </div>
      )}
      <br/>
      <h1 style={{ color: "red" }}> You will get what you Dreamed in LIFE & More than That!</h1>
      <br/>
      <h1 style={{ color: "red" }}>Think Big, Do Big | Believe | Think +Ve </h1>
      <br/>
      <h1 style={{ color: "red" }}>Dont give up on your Goals | Manifest | Anything is Possible when you TRY</h1>
      <br/>
      <h1 style={{ color: "red" }}>Believe | Best Days are coming towards YOU | Fortune favors the BOLD</h1>
    </div>
  );
}

export default App;
