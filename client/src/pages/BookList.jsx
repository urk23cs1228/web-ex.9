import { useEffect, useState } from "react";
import axios from "axios";

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books")
      .then((res) => setBooks(res.data))
      .catch(() => console.error("Failed to load books"));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Library Books 📚</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book._id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              {book.title}
            </h3>
            <p className="text-gray-700 mb-1">👤 {book.author}</p>
            <p className="text-gray-600 mb-3">{book.description}</p>
            {book.pdf && (
              <a
                href={`http://localhost:5000${book.pdf}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                📄 View PDF
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
