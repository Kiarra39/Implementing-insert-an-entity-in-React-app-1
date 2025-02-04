import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddBook.css';

const AddBook = () => {
  const [bookDetails, setBookDetails] = useState({
    title: '',
    author: '',
    description: '',
    coverImage: '',
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({ ...bookDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(bookDetails);

    navigate('/'); 
  };

  return (
    <div className="add-book-container">
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit} className="add-book-form">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={bookDetails.title}
            onChange={handleChange}
            placeholder="Enter book title"
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={bookDetails.author}
            onChange={handleChange}
            placeholder="Enter author's name"
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={bookDetails.description}
            onChange={handleChange}
            placeholder="Enter book description"
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label>Cover Image URL</label>
          <input
            type="url"
            name="coverImage"
            value={bookDetails.coverImage}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
