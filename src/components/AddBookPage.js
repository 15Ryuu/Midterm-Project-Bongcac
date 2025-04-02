import React, { useState } from 'react';

const AddBookPage = ({ onAddBook }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: ''
  });
  
  const genres = [
    "Fiction", "Non-Fiction", "Fantasy", "Science Fiction", 
    "Mystery", "Thriller", "Romance", "Horror", "Biography", 
    "History", "Classic", "Children's", "Young Adult", "Poetry", 
    "Self-Help", "Business", "Travel", "Science", "Dystopian", "Other"
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.author && formData.genre) {
      onAddBook(formData);
      // Reset form
      setFormData({
        title: '',
        author: '',
        genre: ''
      });
    }
  };
  
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-pink-800">Add New Book</h2>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 max-w-lg">
        <div className="mb-4">
          <label className="block text-pink-700 mb-2" htmlFor="title">
          📖 Book Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-pink-700 mb-2" htmlFor="author">
          ᝰ🖋️ Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-pink-700 mb-2" htmlFor="genre">
          🎥 Genre
          </label>
          <select
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          >
            <option value="">Select a genre</option>
            {genres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </div>
        
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition"
        >
          √ Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBookPage;