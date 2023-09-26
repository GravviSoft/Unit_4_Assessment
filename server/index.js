const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(express.json());

const { getModule } = require('./controller')
const { deleteModule } = require('./controller')
const { postModule } = require('./controller')
const { putModule } = require('./controller')
const { getModuleNumTwo } = require('./controller')

app.delete('/api/:id', deleteModule)

app.get("/api/compliment", getModule)

app.put('/api/:id', putModule)

app.post("/api", postModule)

app.get("/api/data", getModuleNumTwo)


app.listen(4000, () => console.log("Server running on 4000"));
// Horse1986!