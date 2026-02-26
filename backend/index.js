import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send("successfully get request | this is / route")
})




mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("app connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening on port: http://localhost:${PORT}/`);
        })

    })
    .catch((error) => {
        console.log(error);
    })