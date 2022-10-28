const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const usersRouter = require("./routes/route");


app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(("/users"), usersRouter)

// user route


//home route
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
})

// route not found
app.use((req, res, next)=>{
    res.status(404).json({message: "route not found"})
})

// Server Not found
app.use((req, res, next)=>{
    res.status(500).json({message: "Something Broke"})
})

module.exports = app;