import express from "express";
import mysql from "mysql";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
            return res.status(200).json("User successfully created!");
        });
    });
});

router.post("/login", (req, res) => {
    // Check user
    const q = "SELECT * FROM users where email = ?";

    db.query(q, [req.body.user_email], (err, data) => {
        if (err) return res.json(err);
        if (data.length === 0 ) return res.status(404).json("User not found!");

        // Check password
        const isPasswordCorrect = bcrypt.compareSync(req.body.user_password, data[0].user_password);

        if (!isPasswordCorrect) return res.status(400).json("Wrong username or password!");

        const token = jwt.sign({user_id:data[0].user_id}, "jwtkey");
        const {user_password, ...other} = data[0]

        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(other)
    });
});

router.get("/login", (req, res) => {
    res.json("Hello from the login page!")
});

router.get("/logout", (req, res) => {
    res.json("Hello from the logout page!")
})

export default router
