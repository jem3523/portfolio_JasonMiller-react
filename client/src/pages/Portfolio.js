import React, { useState } from "react";
import Card from "../components/Card";
import myapps from "../MyApps.json";

function Portfolio() 
{
  const [state, setState] = useState({currentCard: -1})

 
 function handleShowLink (id)
  {
    setState({ currentCard: id});
  }


  return (
    <div className="container background-white pb-3 mt-3">
      <div className="row">
          <div className="col-md-12">
              <h3>Portfolio</h3>
          </div>
      </div>
      <div className="row">
        {myapps.map(myapp => ( 
        <div onClick   = {() => handleShowLink(myapp.id)}>
          <Card 
            key       = {myapp.id}
            appLink   = {myapp.appLink}
            gitLink   = {myapp.gitLink}
            imgLink   = {myapp.imgLink}
            imgAlt    = {myapp.imgAlt}
            toolText  = {myapp.toolText}
            appName   = {myapp.appName}
            id        = {myapp.id}
            showLinks = {myapp.id === state.currentCard}      //this returns either T/F for the embedded conditional
          />
         </div> 
        ))}
      </div>
    </div>
  )
}

export default Portfolio;
