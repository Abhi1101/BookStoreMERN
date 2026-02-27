import express from 'express';
import { Book } from '../models/bookModel.js';


const router = express.Router();

// Route to create a book in database
router.post('/', async (req, res) => {
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
router.get("/", async (req, res) => {
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

// Route to Get One Book By id from database
router.get("/:id", async (req, res) => {
    try {

        const {id} = req.params;

        const book = await Book.findById(id);
        if(!book){
            res.status(404).send({message : "Book Not Found"});
        }
        return res.status(200).json(book);

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
})

// Route to Update a Book
router.put("/:id", async (req , res)=>{

    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            // console.log(req.body);      // test check
            return res.status(400).send({
                message: "all fields are required : title, auther, publishYear",
            })
        }
        
        const {id} = req.params;
        const result = await Book.findByIdAndUpdate(id,req.body);

        if(!result){
            return res.status(404).json({message : "Book not found"});
        }

        return res.status(200).send({message : "Book Updated Successfully"});
  
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }

})

// Route to Delete a Book
router.delete("/:id", async (req , res)=>{
    try {

        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id);

        if(!result){
            return res.status(404).json({message : "Book not found"});
        }
        
        res.status(200).json({message : "Book deleted Successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
})

export default router; 