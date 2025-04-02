import React, { useState } from 'react';
import HomePage from './components/HomePage';
import AddBookPage from './components/AddBookPage';
import EditBookPage from './components/EditBookPage';
import AboutPage from './components/AboutPage';
import Notification from './components/Notification';
import './style.css';
import './App.css';

const App = () => {
  // State for managing books
  const [books, setBooks] = useState([
    { id: 1, title: "Bring Me Their Hearts", author: "Sara Wolf", genre: "Fantasy" },
    { id: 2, title: "Find Me Their Bones", author: "S.Wolf", genre: "Fiction" },
    { id: 3, title: "Send Me Their Souls", author: "S. Wolf", genre: "Fiction" }
  ]);
  
  // State for managing current page
  const [currentPage, setCurrentPage] = useState('home');
  
  // State for notification
  const [notification, setNotification] = useState({ show: false, message: '' });
  
  // State for book being edited
  const [editingBook, setEditingBook] = useState(null);
  
  // Function to add a new book
  const addBook = (newBook) => {
    const bookWithId = {
      ...newBook,
      id: books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1
    };
    setBooks([...books, bookWithId]);
    showNotification('Book added successfully!');
    
    // Redirect to home page
    setCurrentPage('home');
  };
  
  // Function to delete a book
  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
    showNotification('Book deleted successfully!');
  };
  
  // Function to start editing a book
  const startEditing = (book) => {
    setEditingBook(book);
    setCurrentPage('edit');
  };
  
  // Function to update a book
  const updateBook = (updatedBook) => {
    setBooks(books.map(book => 
      book.id === updatedBook.id ? updatedBook : book
    ));
    showNotification('Book updated successfully!');
    
    // Reset editing book and redirect
    setEditingBook(null);
    setCurrentPage('home');
  };
  
  // Function to show notification
  const showNotification = (message) => {
    setNotification({ show: true, message });
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000);
  };
  
  // Navigation handler
  const navigate = (page) => {
    setCurrentPage(page);
    // Clear editing state if navigating away from edit page
    if (page !== 'edit') {
      setEditingBook(null);
    }
  };
  
  return (
    <div className="min-h-screen bg-pink-50">
      {/* Header/Navigation Bar */}
      <header className="bg-pink-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Madeline's Book Records Management</h1>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <button 
                    onClick={() => navigate('home')}
                    className={`px-3 py-2 rounded hover:bg-pink-700 transition ${currentPage === 'home' ? 'bg-pink-700' : ''}`}
                  >
                    🏠︎ Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('add')}
                    className={`px-3 py-2 rounded hover:bg-pink-700 transition ${currentPage === 'add' ? 'bg-pink-700' : ''}`}
                  >
                    ✙ Add New Book
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('about')}
                    className={`px-3 py-2 rounded hover:bg-pink-700 transition ${currentPage === 'about' ? 'bg-pink-700' : ''}`}
                  >
                    ✦ About
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Notification */}
        {notification.show && (
          <Notification message={notification.message} />
        )}
        
        {/* Pages */}
        {currentPage === 'home' && (
          <HomePage books={books} onDelete={deleteBook} onEdit={startEditing} />
        )}
        
        {currentPage === 'add' && (
          <AddBookPage onAddBook={addBook} />
        )}
        
        {currentPage === 'edit' && editingBook && (
          <EditBookPage book={editingBook} onUpdateBook={updateBook} />
        )}
        
        {currentPage === 'about' && (
          <AboutPage />
        )}
      </main>
    </div>
  );
};

export default App;