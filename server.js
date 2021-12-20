// add all required routes and packages
const express = require("express");
const app = express();
const apiroutes = require("./routes/apiroutes");
const htmlroutes = require("./routes/htmlroutes");
const path = require("path");

// port creation
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extend: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", apiroutes);
app.use("/", htmlroutes);

// start server on port
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
