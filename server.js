"use strict"

const express = require("express"),
      router = require("./router/router"),
      host ="127.0.0.1";
      
let port = process.env.PORT || 3000;

let parseXlsx = require('excel');

var storage = require('node-persist');

storage.create();

const app = express();

app.use("/assets", express.static("public"));
app.use("/", router);



app.set("views", "./views");
app.set("view engine", "ejs");




let serverCallback = () => {
    console.log(
        `Server Running On Host: ${ host }:${ port }`
    );
};


app.listen(port, serverCallback);

