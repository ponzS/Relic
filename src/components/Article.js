
import React from 'react';

const Article = ({ title, content, updateTime }) => {
  return (
    <div className="article">
      <h2>{title}</h2>
      <p>{content}</p>
      <p className="update-time"> {updateTime}</p>
    </div>
  );
};

export default Article;
