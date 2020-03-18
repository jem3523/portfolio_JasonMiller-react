import React, { useState , useEffect } from "react";
import Card from "../components/Card";
import myapps from "../MyApps.json";

function Portfolio() 
{
  const [state, setState] = useState({})

  // load JSON file
  useEffect(() => setState(myapps))


  function handleShowLink (e)
  {
    //setState({ ...state, showLinks : false});
    this.setState({ ...state, showLinks : true});
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
          <Card 
            key={myapp.id}
            appLink   = {myapp.appLink}
            gitLink   = {myapp.gitLink}
            imgLink   = {myapp.imgLink}
            imgAlt    = {myapp.imgAlt}
            toolText  = {myapp.toolText}
            appName   = {myapp.appName}
            id        = {myapp.id}
            showLinks = {myapp.showLinks}
            onClick   = {handleShowLink} 
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio;
