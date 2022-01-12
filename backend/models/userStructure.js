// import connection
import db from "../config/db.js";
import { createRequire } from "module";
import { clearScreenDown } from "readline";
import crs from "crypto-random-string"
import { encodeVerification } from "../utils/mail.js";
const require = createRequire(import.meta.url);
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
// const mysql = require('mysql');
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const app = express();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// parser for forms undefined problem when submit form
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//views
app.set("view engine", "ejs");
app.set("views", "views");

// email connection

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "skillproofed123@gmail.com",
    pass: "Skillproofed@1234",
  },
});

// cookie parser
app.use(cookieParser());

db.connect();

app.get("/", (req, res) => {
  res.render("index");
});

// Get All Products
export const getUsers = (result) => {
  db.query("SELECT * FROM registration", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Get Single Product
export const getUsersById = (id, result) => {
  db.query(
    "SELECT * FROM registration WHERE User_id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    }
  );
};

// Insert Product to Database
export const insertUsers = (data, result) => {
  // bcrypt.genSalt(10, function (err, salt) {
  //   bcrypt.hash(data.body.password, salt, function (err, hash) {
  //       if (err) {
  //           console.log(err);
  //       } else {
  //           store(hash);
  //       }

  //   });
  // });
  //function store(pass) {
  var verify = crs({ length: 128, type: 'url-safe'})

  const token = encodeVerification({ email: data.email, verify })

  var mailOption = {
    from: "eng18ct0032@gmail.com", // sender email
    to: `${data.email}`, // receiver email
    subject: "Account Verification",
    html: `<h1> Please Click on this link<h1><br><br><a href="http://localhost:5000/verification/?verify=${token}">CLICK ME TO ACTIVATE YOUR ACCOUNT</a>`,
  };
  
  //storing data
  var userData = {
    email: data.email,
    password: data.password,
    verification: verify,
  };

  db.query("INSERT INTO registration SET ?", [userData], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      transporter.sendMail(mailOption, (error, info) => {
        if (error) {
          console.log(error);
        }
        try {
          console.log({ info });

          let data = {
            email: `${userData.email}`,
            verify,
          };
          console.log(data);
          result(null, data);
        } catch (error) {
          console.log({ error });
        }
      });
      console.log("data sucessfully inserted");
    }
  });
};
//}

app.get("/verification/", (req, res) => {
  console.log(req);

  const { verify } = req.query;

  console.log(req.cookies);

  db.query(
    "SELECT verify.verification FROM registration WHERE email = ?",
    req.cookies.UserInfo.email,
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500);
        return res.send("Internal Server Error");
      } else {
        const verification = result[0].verification;

        if (verify === verification) {
          db.query(
            "UPDATE registration SET active = ?",
            "true",
            (err2, result2) => {
              if (err2) {
                console.log(err2);
                res.status(500);
                return res.send("Internal Server Error");
              }
              console.log("after err2", { result2 });

              const userdata = {
                email: `${req.body.Email}`,
                verify: "TRUE",
              };

              res.cookie("UserInfo", userdata);
              res.send("<h1>Account Verification Successfully</h1>");
            }
          );
        } else {
        }
      }
    }
  );
});

// Update Product to Database
export const updateUsersById = (data, id, result) => {
  db.query(
    "UPDATE registration SET User_name = ?, Email = ?, Password = ?,Conf_pwd  = ?, WHERE User_id = ?",
    [data.User_name, data.Email, data.Password, data.Conf_pwd, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};
export const loginUserById = (data, id, result) => {
  db.query(
    "UPDATE registration SET User_name = ?,  Password = ?, WHERE User_id = ?",
    [data.User_name, data.Password, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};
// verification
app.get("/verification/", (userdata, res) => {
  function activateAccount(verification) {
    if (verification == req.query.verify) {
      db.query("UPDATE verify SET active = ?", "true", (err, result) => {
        if (err) {
          console.log(err);
        } else {
          let userdata = {
            email: `${req.body.Email}`,
            verify: "TRUE",
          };
          res.cookie("UserInfo", userdata);
          res.send("<h1>Account Verification Successfully</h1>");
        }
      });
    } else {
      res.send("<h1>verification failed</h1>");
    }
  }
  db.query(
    "SELECT verify.verification FROM verify WHERE email = ?",
    req.cookies.UserInfo.email,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        activateAccount(result[0].verification);
      }
    }
  );
});


//password reset
export const forget_password = (data, result) => {

  console.log("hi "+data);
  var verify = crs({ length: 128, type: 'url-safe'})

  const token = encodeVerification({ email: data.email, verify })

  var mailOption = {
    from: "eng18ct0032@gmail.com", // sender email
    to: `${data.email}`, // receiver email
    subject: "Account Verification",
    html: `<h1> Please Click on this link<h1><br><br><a href="http://localhost:5000/verification/?verify=${token}">CLICK ME TO ACTIVATE YOUR ACCOUNT</a>`,
  };
  var userData = {
    email: data.email,
  };

  db.query("INSERT INTO resettoken SET ?", [userData], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      transporter.sendMail(mailOption, (error, info) => {
        if (error) {
          console.log(error);
        }
        try {
          console.log({ info });

          let data = {
            email: `${userData.email}`,

          };
          console.log(data);
          result(null, data);
        } catch (error) {
          console.log({ error });
        }
      });
      console.log("data sucessfully inserted");
    }
  });
 
  // var email = await User.findOne({where: { email: data.body.email }});//sql convert select email from register where email=data.body  

  //   return res.json({status: 'ok'});
  
  // /**
  //  * Expire any tokens that were previously
  //  * set for this user. That prevents old tokens
  //  * from being used.
  //  **/
  // await ResetToken.update({
  //     used: 1
  //   },
  //   {
  //     where: {
  //       email: data.body.email
  //     }
  // });
 
  // //Create a random reset token
  // var fpSalt = crypto.randomBytes(64).toString('base64');
 
  // //token expires after one hour
  // var expireDate = new Date(new Date().getTime() + (60 * 60 * 1000))
 
  // //insert token data into DB
  // await ResetToken.create({
  //   email: data.body.email,
  //   expiration: expireDate,
  //   token: fpSalt,
  //   used: 0
  // });
 

  // // var verify = crs({ length: 128, type: 'url-safe'})

  // // const token = encodeVerification({ email: data.email, verify })

  // var message = {
  //   from: "eng18ct0032@gmail.com", // sender email
  //   to: `${data.email}`, // receiver email
  //   subject: "Account Verification",
  //   html: `<h1>To reset your password, please click the link below<h1><br><br><a href="http://localhost:5000/verification/?verify=${token}">CLICK ME TO RESET YOUR PASSWORD</a>`,
  // };
  // //create email
  // const message = {
  //     from: process.env.SENDER_ADDRESS,
  //     to: req.body.email,
  //     replyTo: process.env.REPLYTO_ADDRESS,
  //     subject: process.env.FORGOT_PASS_SUBJECT_LINE,
  //     text: 'To reset your password, please click the link below.\n\nhttps://'+process.env.DOMAIN+'/user/reset-password?token='+encodeURIComponent(token)+'&email='+req.body.email
  // };

  // //send email
  // transport.sendMail(message, function (err, info) {
  //    if(err) { console.log(err)}
  //    else { console.log(info); }
  // });
 
  // return res.json({status: 'ok'});
};




app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});
app.get("/login", (req, res) => {
  res.render("login");
});



// Delete Product to Database
// export const deleteUserById = (id, result) => {
//   db.query("DELETE FROM User WHERE User_id = ?", [id], (err, results) => {
//     if (err) {
//       console.log(err);
//       result(err, null);
//     } else {
//       result(null, results);
//     }
//   });
// };
