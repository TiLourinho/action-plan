const express = require("express");

const tasksRoutes = require("./routes/tasks");

const app = express();
app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(tasksRoutes);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
