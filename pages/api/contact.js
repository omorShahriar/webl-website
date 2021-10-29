export default function (req, res) {
  let nodemailer = require("nodemailer");
  const password = process.env.GMAIL_PASS;
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.GMAIL_USER,
      pass: password,
    },
    secure: true,
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  console.log(req.body);
  const mailData = {
    from: `'webl-contact' <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `[Contact from website] : ${req.body.subject} `,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
                <div class="container" style="margin-left: 20px;margin-right: 20px;">
                    <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
                <div style="font-size: 16px;">
                <p>Message:</p>
                <p>${req.body.message}</p>
                <br>
              </div>
           
        </div>
      </body>
      </html>`,
  };
  transporter.sendMail(mailData, (err, info) => {
    if (err) console.error(err);
    else console.log(info);
  });

  return res.status(200).json({ message: "it worked fine" });
}
