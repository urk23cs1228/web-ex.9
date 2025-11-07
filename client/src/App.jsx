import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UploadBook from "./pages/UploadBook";
import BookList from "./pages/BookList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <Router>
      {/* Toast notifications */}
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />

      {/* Background wrapper */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<UploadBook />} />
          <Route path="/books" element={<BookList />} />
        </Routes>
      </div>
    </Router>
  );
}
