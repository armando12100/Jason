import express from "express"
import cors from 'cors';
import parks from "./routes/parks.js"
import auth from "./routes/auth.js"

const app = express();

const PORT = 3000;

 // allows me to post via postman
 app.use(express.json());

  // connects frontend with backend
  app.use(cors());

  app.use("/parks", parks);

  app.use("/auth", auth);

 // get request for homepage
app.get("/", (req, res) => {
    res.json("Hello from the backend!")
});

app.listen(PORT, () => {
    console.log("Connect to port 3000!")
})