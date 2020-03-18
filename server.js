const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const nodemailer = require('nodemailer');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


//send email using nodemailer
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


app.post('/send', (req, res, next) => 
{
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
    
  var mailOptions = 
  {
      from: 'jaericm@yahoo.com',
      to: 'jaericm@yahoo.com',
      subject: "Website Contact Message from " + name,
      text: name + " (" + email + "): ",
      html: "<p>" + message + "</p>"
  };
        
  console.log ("mailOptions:");
  console.log (mailOptions);

  transporter.sendMail(mailOptions, function(error, info)
  {
      if (error) 
      {console.log('Transporter error: ' + error)} 
      else 
      {console.log('Email sent: ' + info.response)}
  });

})


