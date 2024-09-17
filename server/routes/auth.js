import express from "express";
import mysql from "mysql";
import bcrypt from "bcryptjs";

var router = express.Router();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"nationalparks"
});

router.post("/register", (req, res) => {
    // Simple check for existing user
    const q = "SELECT * FROM users WHERE user_email = ? OR user_password = ?"

    db.query(q, [req.body.user_email, req.body.name], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("User already exists!");
        
        //Hash the password & create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.user_password, salt);
        
        const q = "INSERT INTO users(`user_email`, `user_password`) VALUES (?)"
        const values = [
            req.body.user_email,
            hash
        ]

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("User successfully created!")
        });
    });
});

router.get("/login", (req, res) => {
    res.json("Hello from the login page!")
});

router.get("/logout", (req, res) => {
    res.json("Hello from the logout page!")
})

export default router
