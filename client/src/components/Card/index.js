import React from "react";
import "./style.css";

function Card(props)
{
  return (
  <div className="col-md-3" key={props.id} >
      <img 
        src= {props.imgLink} 
        alt= {props.imgAlt} 
        height="130px" 
        width="160px"
        className="img-responsive py-2"
      />

      <div className ="imageHolderText" onClick={props.handleShowLink}>{props.appName}
        <span className ="tooltiptext">{props.toolText}</span>
      </div>


    {/* conditional statement that shows links upon click */}
      {
        (props.showLinks === false) ? "" :
        <div>
          <div className = 'moreInfoDetail'><a className = 'font-green' href ={props.appLink} target='_blank' rel='noopener noreferrer'>Live Application</a></div>
          <div className = 'moreInfoDetail'><a className = 'font-green' href ={props.gitLink} target='_blank' rel='noopener noreferrer'>GitHub Source</a></div>
        </div>
      }
  </div>
  );
}

export default Card;