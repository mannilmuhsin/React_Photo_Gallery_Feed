import React from "react";

function ArticleItem({ article, onClick }) {
  return (
    <div
      onClick={() => onClick(article)}
      className="article-item hover:cursor-pointer flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
    >
      <img
        src={article.node?.field_photo_image_section}
        alt={article.node?.title}
        className="w-1/3 h-40 object-cover rounded-lg transition-transform duration-300 hover:scale-110 hover:rotate-3"
      />
      <div className="w-2/3">
        <h3 className="text-lg font-bold text-gray-800">
          {article.node?.title}
        </h3>
      </div>
    </div>
  );
}

export default ArticleItem;
