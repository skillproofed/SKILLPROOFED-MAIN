// import express
import express from "express";
// import cors
import cors from "cors";
// import routes
import Router from "./routes/route.js";
import db from "./config/db.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { decodeVerification } from "./utils/mail.js";
// init express
const app = express();

// use express json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
// use cors
app.use(cors());

app.use(morgan("dev"));

// use router
db.connect((err) => {
  if (err) console.log({ err });

  console.log("Connected to database");
});

app.use(Router);



app.get("/verification", (req, res) => {
  const { verify } = req.query;
  const data = decodeVerification(verify)

  console.log(({data}));
  // const UserInfo = req.cookies["user-info"];
  if (data) {
    const token = data.verify
    const email = data.email
    
    db.query(
      "SELECT verification FROM registration WHERE email = ?",
      email,
      (err, results) => {
        console.log({ result: results });
        if (err) {
          console.log({ err });
          res.status(500);

          return res.send("Internal Server Error");
        }

        if (results.length > 0) {
          try {
            const verification = results[results.length - 1].verification;
            console.log({token,
              verification});
            if (token === verification) {
              db.query("UPDATE registration SET active = ? WHERE email = ?", ['true', email],  (err2) => {
                if (err2) {
                  res.status(500);
                  return res.send("Internal Server Error");
                }

                  res.cookie("verify", "TRUE");
                return res.send("<h1>Account Verification Successfully</h1>");
              });
            } else {
              return res.sendStatus(401);
            }
          } catch (error) {
            console.log("tc2", error);
          }
        } else {
          res.sendStatus(420);
        }
      }
    );
  } else {
    return res.sendStatus(400);
  }
});

app.listen(5000, () => console.log("Server running at http://localhost:5000"));
