import express from "express";
import mysql from "mysql"

var router = express.Router();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"nationalparks"
});

// get request that gets all comments for current user
// router.get("/:id", async (req,res) => {

//     const q = "SELECT username, user_id, comments.*, parks.park_id, parks.park_rating FROM parks JOIN comments ON parks.park_id = comment_park_id LEFT JOIN users ON user_id = comment_user_id;"
    
//     db.query(q, (err,data) => {
//         if (err) return (err)
//         return res.json(data)
//     })
// });

// get request that gets the curret rating for the current park
router.get("/:id/:parkId", async (req,res) => {

    const parkId = req.params.parkId
    const q = "SELECT parks.*, comments.* FROM parks JOIN comments ON comment_park_id = ?;"
    
    db.query(q, [parkId], (err,data) => {
        if (err) return (err)
        return res.json(data)
    })
});

// post to comments table
router.post("/", async (req, res) => {
    const q = "INSERT INTO comments (`comment_user_id`, `comment_park_id`, `content`, `timestamp`, `title`, `rating`) VALUES (?)"

    const values = [
        req.body.comment_user_id,
        req.body.comment_park_id,
        req.body.content,
        req.body.timestamp,
        req.body.title,
        req.body.rating
    ]

    console.log(values);

    db.query(q,[values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Comment has been successfully saved to the database!");
    });
 });

 export default router