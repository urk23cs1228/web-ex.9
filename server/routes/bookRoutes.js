import express from "express";
import multer from "multer";
import Book from "../models/Book.js";

const bookRouter = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// 📤 Upload new book
bookRouter.post("/upload", upload.single("pdf"), async (req, res) => {
  try {
    const { title, author, description } = req.body;
    const newBook = new Book({
      title,
      author,
      description,
      pdf: req.file ? `/uploads/${req.file.filename}` : "",
    });

    await newBook.save();
    res.status(201).json({ message: "Book uploaded successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Upload failed", error: err.message });
  }
});

// 📚 Get all books
bookRouter.get("/", async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch books" });
  }
});

export default bookRouter;
