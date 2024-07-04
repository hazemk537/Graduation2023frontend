import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import ArticleCard from './ArticleCard';
import Pagination from './Pagination';
// import SaveDelBtn from './SaveDelBtn';
import '../styles/common.css';

const SavedArticles = () => {
  const [totalPages, setTotalPages] = useState(1);
  const [token, setToken] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); 
  const [data, setData] = useState(null); // State to hold fetched data
  const [pageSize, setPageSize] = useState(10); // Default pageSize

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData && storedData !== 'undefined') {
      const parsedData = JSON.parse(storedData);
      if (parsedData && parsedData.token) {
        setToken(parsedData.token);
      }
      if (parsedData && parsedData.pageSize) {
        setPageSize(parsedData.pageSize);
      }
    }
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData && storedData !== 'undefined') {
      const parsedData = JSON.parse(storedData);
      if (parsedData && parsedData.pageNumber) {
        setPageNumber(parsedData.pageNumber);
      }
    }
  }, []);

  useEffect(() => {
    const url = `https://BrieflyNews.runasp.net/api/v1/Article/GetAllUserSavedArticles?PageNumber=${pageNumber}&PageSize=${pageSize}`;
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const result = await response.json();
        setData(result); // Set fetched data
        if (result && result.succeeded) {
          setTotalPages(result.totalPages);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [token, pageNumber, pageSize]);

  if (!token) {
    return <div>Please log in to view saved articles.</div>;
  }

  if (!data) {
    return <Spinner />;
  }

  if (!data.succeeded) {
    return <div>{data.message}</div>;
  }

  return (
    <div>
      <h1>Saved Articles</h1>
      {data.data && data.data.length > 0 ? (
        <>
          <div className="articlesNavbar">
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} totalPages={totalPages} />
          </div>
          <div className="gallary_items div_userArticles">
            {data.data.map((article) => (
              <div key={article.id} className="articleCardContainer">
                <ArticleCard item={article} />
                {/* <SaveDelBtn articleId={article.id} /> */}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>No saved articles available.</div>
      )}
    </div>
  );
};

export default SavedArticles;
