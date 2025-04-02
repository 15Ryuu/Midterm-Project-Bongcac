import React from 'react';

const Notification = ({ message }) => {
  return (
    <div className="mb-4 p-3 bg-pink-100 text-pink-700 rounded border border-pink-200">
      {message}
    </div>
  );
};

export default Notification;