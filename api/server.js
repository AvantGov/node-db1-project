const express = require("express");
const application_router = require("./Routers/application_router")


const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());
server.use("/", application_router)
module.exports = server;
