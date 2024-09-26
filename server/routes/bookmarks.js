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
    const q = "SELECT * FROM parks JOIN bookmarks ON parks.park_id = bookmarks.bookmark_park_id AND bookmarks.user_id = ?"
    
    const id = req.params.id

    db.query(q, [id], (err,data) => {
        if (err) return (err)
        return res.json(data)
    })
});

// post to bookmarks table
router.post("/", (req, res) => {
    const q = "INSERT INTO bookmarks (`user_id`, `bookmark_park_id`, `bookmarked`) VALUES (?)"

    const values = [
        req.body.user_id,
        req.body.bookmark_park_id,
        req.body.bookmarked
    ]
    
    console.log(values);

    db.query(q,[values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Park has been successfully bookmarked!");
    });
 });

//  update bookmarked to true or false
 router.put("/:id", (req, res) => {
    const id = req.params.id;
    // const q =
    //   "UPDATE nationalparks.parks SET `bookmarked` = false WHERE park_id = parks.park_id";
  
    const q =
    "UPDATE nationalparks.parks INNER JOIN nationalparks.bookmarks ON parks.park_id = bookmarks.park_id AND bookmarks.user_id = ? SET `bookmarked` = NOT `bookmarked` WHERE bookmarks.user_id = ?"

    console.log(req.body.bookmarked);

    db.query(q, [id], (err, data) => {
      if (err) return res.json(err);
      return res.json("hmmm");
    });
  });



export default router