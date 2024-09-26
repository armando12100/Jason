import express from "express";
import mysql from "mysql"

var router = express.Router();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"nationalparks"
});

// get request that gets all parks
router.get("/", (req,res) => {
    const q = `SELECT * FROM parks`
    db.query(q, (err,data) => {
        if (err) return id
        return res.json(data)
    })
});


// get request that gets all parks
router.get("/:state", (req,res) => {
    const state = req.params.state;

    const q = `SELECT * FROM parks LEFT JOIN bookmarks ON parks.park_id = bookmarks.bookmark_park_id WHERE state = ? OR bookmarks.bookmarked != true`
    db.query(q, [state], (err,data) => {
        if (err) return id
        return res.json(data)
    })
});

// get request for single park

router.get("/:state/:park", (req,res) => {
    const park = req.params.park;
    const q = `SELECT * FROM parks WHERE park_name = ?`
    db.query(q, [park], (err,data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});


router.post("/", (req, res) => {
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


export default router