import { FormGroup, FormControlLabel, Checkbox, Paper } from "@mui/material";
import { GiStairsGoal } from 'react-icons/gi';
import React from "react";

const MilestonesTracker = () => {
  const [trackerValue, setTrackerValue] = React.useState(0);

  const addTrackerValue = () => {
    setTrackerValue((trackerValue) => trackerValue + 25);
  };

  function getColor(value:number) {
    switch (value) {
      case 25:
        return 'orange';
      case 50:
        return 'yellow';
      case 75:
        return 'pink';
      case 100:
        return 'greenyellow';
      default:
        return 'red';
    }
  }

  return (
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
      <FormGroup style={{display:'flex',flexDirection:'row',justifyContent:'center',color:'blue'}}>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Work-Out"
          onClick={addTrackerValue}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Python"
          onClick={addTrackerValue}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Sql"
          onClick={addTrackerValue}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="DSA"
          onClick={addTrackerValue}
        />
      </FormGroup>
      <Paper style={{color:getColor(trackerValue),backgroundColor:'black'}} >{`Todays Goal ${trackerValue}% completed successfully `}<GiStairsGoal color="red"/></Paper>
    </div>
  );
};

export default MilestonesTracker;
