import React, { Component } from "react";
import Card from "../components/Card";
import myapps from "../MyApps.json";

class Portfolio extends Component 
{
  state = {myapps};

  render() 
  {
    return (
      <div className="container background-white pb-3 mt-3">
        <div className="row">
            <div className="col-md-12">
                <h3>Portfolio</h3>
            </div>
        </div>
        <div className="row">
          {this.state.myapps.map(myapp => (
            <Card
              appLink= {myapp.appLink}
              gitLink= {myapp.gitLink}
              imgLink= {myapp.imgLink}
              imgAlt=  {myapp.imgAlt}
              toolText={myapp.toolText}
              appName= {myapp.appName}
              id=      {myapp.id}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Portfolio;
