import express from "express";
import mysql from "mysql"

var router = express.Router();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"nationalparks"
});

// get request that gets all bookmarked parks
router.get("/:id", (req,res) => {
    const q = "SELECT * FROM nationalparks.parks INNER JOIN nationalparks.bookmarks ON parks.park_id = bookmarks.park_id AND bookmarks.user_id = ?"
    
    const id = req.params.id
    console.log(id);

    db.query(q, [id], (err,data) => {
        if (err) return (err)
        return res.json(data)
    })
});

// post to bookmarks table
router.post("/", (req, res) => {
    const q = "INSERT INTO bookmarks (`user_id`, `park_id`) VALUES (?)"
    
    const values = [
        req.body.user_id,
        req.body.park_id,
    ]

    db.query(q,[values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Park has been successfully bookmarked!");
    });
 });



export default router