import React from "react";
import "./App.css";
import { Homepage } from "./Homepage/Homepage";
import { Deadlines } from "./Deadlines/Deadlines";
import { Button, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

function App() {
  const [showDeadlines, setShowDeadlines] = React.useState<boolean>(false);
  return (
    <div className="App">
      <Homepage />
      <h1 style={{ color: "red" }}>You Can</h1>

      <IconButton onClick={() => setShowDeadlines(!showDeadlines)}>
        <VisibilityIcon color="warning" />
      </IconButton>
      {showDeadlines && (
        <div>
          <h4>Achievements / Goals to be done by September</h4> <Deadlines />
        </div>
      )}
      <h1 style={{ color: "red" }}>Believe</h1>
    </div>
  );
}

export default App;
