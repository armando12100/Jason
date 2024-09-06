import express from "express"
import mysql from "mysql"
import cors from 'cors';

const app = express();

const PORT = 3000;

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"nationalparks"
});

 // allows me to post via postman
 app.use(express.json());

  // connects frontend with backend
  app.use(cors());

 // get request for homepage
app.get("/", (req, res) => {
    res.json("Hello from the backend!")
});

// get request that gets all parks
app.get("/parks/:state", (req,res) => {
    const state = req.params.state;
    const q = `SELECT * FROM parks WHERE state = ?`
    db.query(q, [state], (err,data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

// get request that gets single park
app.get("/parks/:state/:park", (req,res) => {
    const state = req.params.state;
    const park = req.params.park;
    console.log("hi")
    const q = `SELECT * FROM parks WHERE park_name = ?`
    db.query(q, [park], (err,data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

app.post("/parks", (req, res) => {
    const q = "INSERT INTO parks (`state`, `park_name`, `park_id`) VALUES (?)"
    const values = [
        req.body.state,
        req.body.park_name,
        req.body.park_id,
    ]

    db.query(q,[values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Park has been successfully created!");
    });
 });

app.listen(3000, () => {
    console.log("Connect to port 3000!")
})