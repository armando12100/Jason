import express from "express";
import cors from 'cors';
import parks from "./routes/parks.js";
import auth from "./routes/auth.js";
import bookmarks from "./routes/bookmarks.js";
import comments from "./routes/comments.js";
import cookieParser from "cookie-parser";

const app = express();

const PORT = 3000;

 // allows me to post via postman
 app.use(express.json());
 app.use(cookieParser());

  // connects frontend with backend
  app.use(cors());

  app.use("/parks", parks);

  app.use("/auth", auth);

  app.use("/bookmarks", bookmarks);

  app.use("/comments", comments)

 // get request for homepage
app.get("/", (req, res) => {
    res.json("Hello from the backend!")
});

app.listen(PORT, () => {
    console.log("Connect to port 3000!")
});