import React, { useState } from "react";
import axios from "axios";

function Contact()
{
  // Setting the component's initial state
  const [stateForm, setStateForm] = useState({})

  
  function handleInputChange (event)
  {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state
    setStateForm({...stateForm, [name]: value });
  };


  function formSubmit (event)
  {
    event.preventDefault();

    //collect the values from input
    var enteredName =  stateForm.enteredName;
    var enteredEmail =  stateForm.enteredEmail;
    var enteredMessage = stateForm.enteredMessage;

    //make sure name and email are not empty
    if (!enteredName || !enteredEmail || !enteredMessage) 
    {
        console.log("Name, email, and message are all required.");
        return
    };

    // create an object of the column name key:value pair
    let newMessage = {name: enteredName, email: enteredEmail, message: enteredMessage};
    console.log (newMessage);

    // could I use https://jmillerportfolio.herokuapp.com to make this work?
    axios(
    {
      method: "POST", 
      url:"http://localhost:3001/send", 
      data:
      {
        name: enteredName,
        email: enteredEmail,
        message:  enteredMessage
      }
    });


    setStateForm(
    {
      enteredName    : "",
      enteredEmail   : "",
      enteredMessage : ""
    });
  };

    return (
      <div className="container background-white pb-3 mt-3">

        <div className="row">
          <div className="col-md-12">
            <h3>Contact</h3>
          </div>
        </div>
    
        <form>
          <div className="form-group">
              <label>Name</label>
              <input
                name="enteredName"
                onChange={handleInputChange}
                type="text"
                placeholder="Enter Full Name"
                className="form-control"
              />
          </div>
          <div className="form-group">
              <label>Email</label>
              <input
                name="enteredEmail"
                onChange={handleInputChange}
                type="email"
                placeholder="Enter Email"
                className="form-control"
              />
          </div>
          <div className="form-group">
              <label>Message</label>
              <textarea 
                name="enteredMessage"
                onChange={handleInputChange}
                type="text"
                placeholder="Enter Message"
                className="form-control"
              />
          </div>
          <div className="form-group">
              <button 
                onClick={formSubmit}
                type="submit"
                className="btn btn-primary openModal"
                id= "submitButton"
              >
                Submit
              </button>
          </div>
        </form>
      </div>
    );
  }

export default Contact;
