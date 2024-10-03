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
router.get("/:id", async (req,res) => {
    const q = "SELECT * FROM parks JOIN bookmarks ON parks.park_id = bookmarks.bookmark_park_id AND bookmarks.user_id = ?"
    
    const id = req.params.id

    db.query(q, [id], (err,data) => {
        if (err) return (err)
        return res.json(data)
    })
});

// post to bookmarks table
router.post("/", async (req, res) => {
    const q = "INSERT INTO bookmarks (`user_id`, `bookmark_park_id`, `bookmarked`, `visited`) VALUES (?)"

    const values = [
        req.body.user_id,
        req.body.bookmark_park_id,
        true,
        false
    ]

    db.query(q,[values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Park has been successfully bookmarked to the database!");
    });
 });

 // delete bookmark from bookmarks table
router.delete("/:park_id/:id", async (req, res) => {
    const q = "DELETE from bookmarks WHERE user_id = ? AND bookmark_park_id = ?"

    const id = req.params.id

    const park = req.params.park_id
    
    db.query(q, [id, park], (err, data) => {
        if (err) return console.log(err);
        return res.json("Park has been successfully deleted from the database!");
    });
 });

//  update bookmarked to true or false
 router.put("/:park_id/:id", (req, res) => {
    
    const id = req.params.id;

    const park = req.params.park_id
  
    const q =
    "UPDATE nationalparks.bookmarks SET `visited` = !`visited` WHERE bookmarks.user_id = ? AND bookmarks.bookmark_park_id = ?"

    db.query(q, [id, park], (err, data) => {
      if (err) return console.log(err);
      return res.json("hmmm");
    });
  });



export default router