import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './News.css'
const SearchNews = () => {
  const [query, setQuery] = useState(''); // User search query
  const [news, setNews] = useState([]); // News articles state
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  
  // Replace 'YOUR_API_KEY' with your actual API key from News API
  const API_KEY = 'e2nAovNxgBSJbR6n4UPb5bKAYWPgZO6kaGzRcSvTG48_EBCU';

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
  
    try {
      const response = await fetch(
        `https://api.currentsapi.services/v1/latest-news?apiKey=${API_KEY}&query=${query}`
      );
      const data = await response.json();
  
      if (response.ok) {
        setNews(data.news); // Set fetched news articles
      } else {
        throw new Error('Failed to fetch news');
      }
    } catch (err) {
      setError('Error fetching news: ' + err.message); // Handle errors
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Handle form submission for search
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission
    fetchNews(); // Fetch news when the search is submitted
  };

  // Display loading state
  if (loading) return <p>Loading...</p>;

  // Display error message if an error occurred
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <>
    <div className='ye'>
<img src='/images.jpg'></img>

    </div>
    <div className="container">
      <h1 className="text-center my-4">LAtESt-NeWs</h1>

      <form onSubmit={handleSearch} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for news..."
            value={query} // Use query as value
            onChange={(e) => setQuery(e.target.value)} // Update query state
          />
          <button type="submit" className="btn btn-primary">Search</button>
        </div>
      </form>

      <div className="row">
        {news.map((article, index) => ( // Renamed to 'article'
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              {article.image && (
                <img
                  src={article.image}
                  className="card-img-top"
                  alt={article.title}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">
                  {article.description || 'No description available'}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  Published on {new Date(article.published).toLocaleDateString()}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default SearchNews;
