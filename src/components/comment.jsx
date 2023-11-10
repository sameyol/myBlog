import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <p>{comment.text}</p>
      {/* Render replies here */}
      {comment.replies && comment.replies.map((reply, index) => (
        <div key={index} className="reply">
          <p>{reply.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Comment;
