const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')

const app = express();
app.use(cors())

// routes
const itemRoutes = require("./routes/items");


const port = 3001;

app.use(bodyParser.json());

app.use("/items", itemRoutes);

app.listen(port, () => {
  console.log(`Server started at port http://localhost:${port}`);
});
