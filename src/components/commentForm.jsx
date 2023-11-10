// CommentForm.js
import React, { useState } from 'react';

const CommentForm = ({ addComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/comments", {
        comment
      });
      console.log(res)
    } catch (err) {
        console.log(err)
    }
    addComment(comment);
    setComment('');
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
