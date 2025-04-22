import React, { useState } from "react";
import "./AddBook.css"

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    coverImage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Book</h2>
      <form>
        <label>Title:</label>
        <input type="text" name="title" onChange={handleChange} />

        <label>Author:</label>
        <input type="text" name="author" onChange={handleChange} />

        <label>Description:</label>
        <textarea name="description" onChange={handleChange}></textarea>

        <label>Cover Image URL:</label>
        <input type="url" name="coverImage" onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;