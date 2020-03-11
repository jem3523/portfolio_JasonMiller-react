import React, { Component } from "react";
import Links from "../Links";
import "./style.css";

class Card extends Component 
{
  //once clicked, this function collects the link data embedded in the image and renders them on the page
  seeLinks = (event) =>
  {
    var moreInfoElements = document.getElementsByClassName("moreInfoDetail");
    for (let i=0; i<moreInfoElements.length; i++)
    {
      moreInfoElements[i].remove();
    }

      return(
        <Links 
          appLink = {this.props.appLink} 
          gitLink = {this.props.gitLink}
        />
      )

  }

  render()
  {
    return (
    <div className="col-md-3" key={this.props.id} >
      <span 
      //onClick={this.seeLinks} 
      data-app = {this.props.appLink} 
      data-git = {this.props.gitLink}
      >
        <img 
          src= {this.props.imgLink} 
          alt= {this.props.imgAlt} 
          height="130px" 
          width="160px"
          className="img-responsive py-2"
        />

        <div className ="imageHolderText">{this.props.appName}
          <span className ="tooltiptext">{this.props.toolText}</span>
        </div>
      </span>
      <div>
        <div className = 'moreInfoDetail'>
          <a className = 'font-green' href ={this.props.appLink} target='_blank' rel="noopener noreferrer">Live Application</a>
        </div>
        <div className = 'moreInfoDetail'>
          <a className = 'font-green' href ={this.props.gitLink} target='_blank' rel="noopener noreferrer">GitHub Source</a>
        </div>
      </div>
    </div>
    );
  }
}

export default Card;