import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // Logout and redirect to login page
  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT or session
    navigate("/");
  };

  return (
    <div className="min-h-screen min-w-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">📚 E-Library Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 font-medium"
        >
          Logout
        </button>
      </header>

      {/* Content */}
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Welcome to Your Dashboard 👋
          </h2>
          <p className="text-gray-600 mb-6">
            Here you can manage your uploaded books, explore new resources, and
            keep track of your account.
          </p>

          {/* Dashboard cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                Upload Books
              </h3>
              <p className="text-gray-600 mb-3">
                Add new books to your library collection.
              </p>
              <button
                onClick={() => navigate("/upload")}
                className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Go to Upload
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-green-600 mb-2">
                View Library
              </h3>
              <p className="text-gray-600 mb-3">
                Browse all available books and materials.
              </p>
              <button
                onClick={() => navigate("/books")}
                className="text-sm bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                View Books
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-3 text-sm text-gray-600">
        © {new Date().getFullYear()} E-Library System. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
