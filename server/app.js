const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));
dotenv.config();

const routes = require("./routes");
app.use('/api/v1', routes);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running in port ${port}`));
