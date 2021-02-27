const express = require("express");
const exphbs  = require('express-handlebars');

const app = express();

// Set up Handlebars
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main'
}));

app.set('view engine', '.hbs');

//load controllers
const generalController = require("./controllers/general");

app.use("/", generalController);

// Start listening
const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Web Server is up and running, port ${PORT}`);    
});