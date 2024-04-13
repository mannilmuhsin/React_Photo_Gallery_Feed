import React, { useState } from "react";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import ArticleModal from "./components/ArticleModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <>
      <Header />
      <div className="container mx-auto bg-fuchsia-50 p-6">
        <ArticleList
          onArticleClick={(article) => {
            setSelectedArticle(article);
            setIsModalOpen(true);
          }}
          setIsModalOpen={setIsModalOpen}
          setSelectedArticle={setSelectedArticle}
        />
        <ArticleModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedArticle(null);
          }}
          article={selectedArticle}
        />
      </div>
    </>
  );
}

export default App;
