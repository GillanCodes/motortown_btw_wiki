import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import config from "./config/config";

const app = express();

require('./config/database');

app.use(bodyParser.urlencoded({limit: "1kb", extended: true, parameterLimit: 100}));
app.use(bodyParser.json({limit: "1kb"}));

app.use("/cdn", express.static(path.join(__dirname, "../../public/uploads")));
app.use("/assets", express.static(path.join(__dirname, "../../public/assets")));

import routes from "./routes/index";
app.use("/api", routes)

// Serve React App For Prod
// app.get("*", (req,res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"))
// })

app.listen(config.PORT);
