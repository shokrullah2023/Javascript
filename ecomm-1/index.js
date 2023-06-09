const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const authUser = require("./routes/admin/auth");
const products = require("./routes/admin/product");

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["456lkjosdf"],
  })
);
app.use(authUser);
app.use(products);

app.listen(3000, () => {
  console.log("Listening");
});

