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
      <h1 style={{ color: "red" }}> Think Big, Do Big | Believe </h1>
      
    </div>
  );
}

export default App;
