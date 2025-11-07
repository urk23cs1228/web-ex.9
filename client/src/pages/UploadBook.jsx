import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function UploadBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    pdf: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", form.title);
    data.append("author", form.author);
    data.append("description", form.description);
    data.append("pdf", form.pdf);

    try {
      await axios.post("http://localhost:5000/api/books/upload", data);
      toast.success("Book uploaded successfully!");
      setForm({ title: "", author: "", description: "", pdf: null });
    } catch (err) {
      toast.error("Upload failed");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-[420px]"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Upload a New Book
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-3 border rounded mb-3"
          required
        />

        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={form.author}
          onChange={handleChange}
          className="w-full p-3 border rounded mb-3"
          required
        />

        <textarea
          name="description"
          placeholder="Short Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-3 border rounded mb-3"
        />

        <input
          type="file"
          name="pdf"
          accept="application/pdf"
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700"
        >
          Upload Book
        </button>
      </form>
    </div>
  );
}
