import React, { useState } from "react";
import axios from "axios";

const Name = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setMessage("Please enter a name");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("https://addnames.onrender.com/api/names", {
        name: name.trim(),
      });
      setMessage(`Name added successfully!`);
      setName("");
    } catch (error) {
      setMessage(error.response?.data?.message || "Error adding name");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Add Your Name
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <label htmlFor="name" className="text-gray-700 font-medium">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name here"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 flex-1"
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-green-400 px-6 py-2 text-white hover:bg-green-500 transition disabled:bg-green-300 disabled:cursor-not-allowed font-medium"
          >
            {loading ? "Uploading..." : "Upload Name"}
          </button>
        </form>

        {message && (
          <div
            className={`mt-4 p-3 rounded-lg text-center ${
              message.includes("Error")
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Name;
