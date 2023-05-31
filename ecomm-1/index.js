const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const formData = {};
  res.send(` 
      <div>
        <form>
          <input name="email" placeholder="email" />
          <input name="password" placeholder="password" />
          <input name="passwordConfirmation"  placeholder="passwordConfirmation" />
          <button>Submit</button>
        </form> 
      </div>
        `);
});

app.listen(3000, () => {
  console.log("Listening");
});
