import React from 'react';

const HomePage = ({ books, onDelete, onEdit }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-pink-800">Book List</h2>
      
      {books.length === 0 ? (
        <p className="text-pink-500">No books in your library. Add some books to get started!</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded">
            <thead className="bg-pink-100">
              <tr>
                <th className="py-3 px-4 text-left text-pink-800">Title</th>
                <th className="py-3 px-4 text-left text-pink-800">Author</th>
                <th className="py-3 px-4 text-left text-pink-800">Genre</th>
                <th className="py-3 px-4 text-center text-pink-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map(book => (
                <tr key={book.id} className="border-t border-pink-100 hover:bg-pink-50">
                  <td className="py-3 px-4">{book.title}</td>
                  <td className="py-3 px-4">{book.author}</td>
                  <td className="py-3 px-4">{book.genre}</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center space-x-2">
                      <button 
                        onClick={() => onEdit(book)}
                        className="p-2 bg-pink-400 text-white rounded hover:bg-pink-500 transition"
                        aria-label="Edit book"
                      >
                        ✎
                      </button>
                      <button 
                        onClick={() => onDelete(book.id)}
                        className="p-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
                        aria-label="Delete book"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default HomePage;