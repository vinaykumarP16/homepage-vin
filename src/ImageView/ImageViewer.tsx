import React from "react";
import pr from "./Images/pr.jpg";
import pr1 from "./Images/pr1.jpg";
import pr2 from "./Images/pr2.jpg";
import pr3 from "./Images/pr3.jpg";
import srk from "./Images/srk.jpg";
import msd from "./Images/msd.jpg";
import virat from "./Images/virat.jpg";
import './imageviewer.css';

const ImageViewer = () => {
  const imageUrl = [ pr,msd, pr1,srk, pr2,virat, pr3];

  return (
    <div className="image-box">
      {imageUrl.map((item) => (
        <div>
          <img
            style={{ width: "200px", height: "230px" ,margin:'5px' }}
            src={item}
            alt={item}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageViewer;
