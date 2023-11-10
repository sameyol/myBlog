import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ addComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming your server expects the comment in the request body
      const res = await axios.post("http://localhost:3001/comments", { text: comment });

      // Assuming your server sends back the saved comment including an _id
      const savedComment = res.data;

      // Update state with the saved comment including its _id
      addComment(savedComment);
      setComment('');
    } catch (err) {
      // Handle errors more gracefully, e.g., show an error message to the user
      console.error("Error saving comment:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
        className='border-blue outline-none border-2 mb-2 p-2'
        rows="4"
      />
      <button className='text-white text-center bg-blue-800 p-2' type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
