import React, { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "@mui/material/Skeleton";
import ArticleItem from "./ArticleItem";

function ArticleList({ onArticleClick, setIsModalOpen, setSelectedArticle }) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  const renderSkeletons = () => {
    const skeletonCount = 5;
    const skeletons = [];
    for (let i = 0; i < skeletonCount; i++) {
      skeletons.push(
        <div
          key={i}
          className="article-item flex items-center gap-4 p-4 bg-white rounded-lg shadow-md"
        >
          <Skeleton
            variant="rectangular"
            width="33%"
            height={160}
            className="rounded-lg"
          />
          <div className="w-2/3">
            <Skeleton variant="text" width="80%" height={28} className="mb-2" />
            <Skeleton variant="text" width="60%" height={20} className="mb-1" />
            <Skeleton variant="text" width="50%" height={20} className="mb-1" />
          </div>
        </div>
      );
    }
    return skeletons;
  };

  const fetchArticles = async (currentPage) => {
    if (isFetching) return;

    setIsFetching(true);
    console.log("fetchArticles called for page:", currentPage);

    try {
      const response = await axios.get(
        `http://localhost:3001/api/photo-gallery-feed-page/page/${currentPage}`
      );
      const newArticles = response.data.nodes;

      if (newArticles.length > 0) {
        setArticles((prevArticles) => [...prevArticles, ...newArticles]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
      setHasMore(false);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchArticles(page);
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 500 &&
      hasMore
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasMore]);

  return (
    <div className="articles-list lg:ms-60 max-w-screen-md mt-24 space-y-4">
      {isFetching && articles.length === 0
        ? renderSkeletons()
        : articles.map((article, i) => (
            <ArticleItem
              key={article.node?.nid || i}
              article={article}
              onClick={(article) => {
                onArticleClick(article);
                setIsModalOpen(true);
                setSelectedArticle(article);
              }}
            />
          ))}
      <div className="flex justify-center mt-4">
        {isFetching ? (
          <CircularProgress color="primary" size={40} />
        ) : hasMore ? (
          <p className="text-center">Loading more articles...</p>
        ) : (
          <p className="text-center text-red-600">No more to load 🙄.</p>
        )}
      </div>
    </div>
  );
}

export default ArticleList;
