import React, { Component } from "react";
var nodemailer = require("nodemailer");

class Contact extends Component 
{
  // Setting the component's initial state
  state = 
  {
    enteredName    : "",
    enteredEmail   : "",
    enteredMessage : ""
  };


  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({ [name]: value });
  };


  formSubmit = (event) =>
    {
      event.preventDefault();

      //collect the values from input
      var enteredName =  this.state.enteredName.trim();
      var enteredEmail =  this.state.enteredEmail.trim();
      var enteredMessage = this.state.enteredMessage;

      //make sure name and email are not empty
      if (!enteredName || !enteredEmail || !enteredMessage) 
      {
          console.log("Name, email, and message are all required.");
          return
      };

      // create an object of the column name key:value pair
      // var newMessage = {myName: enteredName, myEmail: enteredEmail, myMessage: enteredMessage};
      // console.log (newMessage);

      //NOTE! Yahoo password must be generated within personal Yahoo account
      let transporter = nodemailer.createTransport(
      {
        service:"yahoo",
        auth: 
        {
            user: "jaericm@yahoo.com",
            pass: "odjklncmulugowsm"
            //pass: process.env.yahooPW
        },
        debug: true,
        logger: true

        //NOTE: yahoo is one of the listed providers for this npm, so the following three attributes are already baked in
        //host: "smtp.mail.yahoo.com",
        //port: 465,
        //secure: true, // true for 465, false for other ports
      });
          
      var mailOptions = 
      {
          from: 'jaericm@yahoo.com',
          to: 'jaericm@yahoo.com',
          subject: "Website Contact Message from " + enteredName,
          text: enteredName + " (" + enteredEmail + "): ",
          html: "<p>" + enteredMessage + "</p>"
      };
              
      console.log ("mailOptions: " + mailOptions);

      transporter.sendMail(mailOptions, function(error, info)
      {
          if (error) 
          {console.log('Transporter error: ' + error)} 
          else 
          {console.log('Email sent: ' + info.response)}
      });
  

      this.setState(
      {
        enteredName    : "",
        enteredEmail   : "",
        enteredMessage : ""
      });
    };


  render() {
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
                value={this.state.enteredName}
                name="enteredName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter Full Name"
                className="form-control"
              />
          </div>
          <div className="form-group">
              <label>Email</label>
              <input
                value={this.state.enteredEmail}
                name="enteredEmail"
                onChange={this.handleInputChange}
                type="email"
                placeholder="Enter Email"
                className="form-control"
              />
          </div>
          <div className="form-group">
              <label>Message</label>
              <textarea 
                value={this.state.enteredMessage}
                name="enteredMessage"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter Message"
                className="form-control"
              />
          </div>
          <div className="form-group">
              <button 
                onClick={this.formSubmit}
                type="submit"
                className="btn btn-primary openModal"
                id= "submitButton"
              >
                Submit
              </button>
          </div>
        </form>

        {/* The Modal */}
        <div id="myModal" className="modal">
        <div className="modal-content">
            <p><b>Thank you!</b><span id="closeModal" className= "close">&times;</span></p>
            <p>An email has been sent to Jason.</p>
        </div>
        </div>
 
      </div>
    );
  }
 }


export default Contact;
