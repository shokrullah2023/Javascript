const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const authUser = require("./routes/admin/auth");
const helpers = require("./views/helpers");


const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["456lkjosdf"],
  })
);
app.use(authUser);



app.listen(3000, () => {
  console.log("Listening");
});

