import { log } from "console";
import * as express from "express";
import * as path from "path";

const app = express();

app.use("/cdn", express.static(path.join(__dirname, "../../public/uploads")));
app.use("/assets", express.static(path.join(__dirname, "../../public/assets")));

// app.get("*", (req,res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"))
// })

app.listen('5000');
