import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import bookRoute from "./routes/booksRoute.js"
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());                 //allow request from anywhere

// app.use(cors({                      //allow request from custom domains 
//     origin: "http://localhost:5173",
//     methods: ["GET","PUT","POST","DELETE"],
//     allowedHeaders: ["Content-Type"],
// }))  

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send("successfully get request | this is / route")
})

app.use("/books", bookRoute);




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