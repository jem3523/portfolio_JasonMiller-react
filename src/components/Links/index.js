import React, { Component } from "react";

class Links extends Component 
{
  render()
  {
    return (
      <div>
        <div class = 'moreInfoDetail'>
          <a class = 'font-green' href ={this.props.appLink} target='_blank' rel="noopener noreferrer">Live Application</a>
        </div>"
        <div class = 'moreInfoDetail'>
          <a class = 'font-green' href ={this.props.gitLink} target='_blank' rel="noopener noreferrer">GitHub Source</a>
        </div>"
      </div>
    );
  }
}

export default Links;