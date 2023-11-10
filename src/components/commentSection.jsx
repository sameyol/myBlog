// CommentSection.js
import React, { useState } from 'react';
import CommentForm from './commentForm';
import Comment from './comment';

const CommentSection = () => {
  const [comments, setComments] = useState([]);

  const addComment = (text) => {
    const newComment = { text, replies: [] };
    setComments([...comments, newComment]);
  };

  return (
    <div className="comment-section mt-20">
      <h2 className='mb-5'>Comments</h2>
      <CommentForm addComment={addComment} />
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
};

export default CommentSection;
