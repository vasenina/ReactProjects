import React from 'react';
import classes from './ProgressBar.module.css';


const ProgressBar = ({completed, all}) => {
   
    let progress = Math.round((completed/all)*100);
    let style = {width: `${progress}%`};
  // , backgroundColor: "#18B518"};

    return (
      <div className = {classes.container}>
        <div className = {classes.filler} style = {style}>
          <span className = {classes.label}>{completed}/{all}
            </span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;