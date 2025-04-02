import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-semibold mb-6 text-pink-800">About</h2>
      
      <div className="bg-white shadow-md rounded p-6">
        <h3 className="text-xl font-medium mb-4 text-pink-700">Maddie's Book Records Management System</h3>
        
        <p className="mb-4 text-pink-800">
          This simple web application helps you manage your book collection. You can add new books, 
          view your entire library, edit book details, and remove books that you no longer want to track.
        </p>
        
        <h4 className="text-lg font-medium mb-2 text-pink-700">How to use:</h4>
        
        <ul className="list-disc pl-5 mb-4 text-pink-800">
          <li className="mb-2">
            <strong>View Books:</strong> The Home page displays all books in your collection
          </li>
          <li className="mb-2">
            <strong>Add Books:</strong> Click "Add New Book" in the navigation menu, fill out the form, and submit
          </li>
          <li className="mb-2">
            <strong>Edit Books:</strong> Click the pencil icon next to any book to modify its details
          </li>
          <li className="mb-2">
            <strong>Delete Books:</strong> Click the trash icon next to any book in the list to remove it
          </li>
        </ul>
        
        <p className="text-pink-800">
          This application was built with React and uses local browser storage to manage your book data.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;