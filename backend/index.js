import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send("successfully get request | this is / route")
})

app.post('/books', async (req, res) => {
    // Add/Create book in database
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            // console.log(req.body);      // test check
            return res.status(400).send({
                message: "all fields are required : title, auther, publishYear",
            })
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        };

        const book = await Book.create(newBook);
        return res.status(201).send({
            message: "book created successfully",
            book
        })


    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }

})

// Route to Get All Books from database
app.get("/books", async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({
            count : books.length,
            data: books
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
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