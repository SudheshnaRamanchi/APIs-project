import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './MovieCard.css'; // Add your custom CSS here

const MovieSearch = () => {
  const [query, setQuery] = useState(''); // User search query
  const [movies, setMovies] = useState([]); // Movie results
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const API_KEY = '6945ec04'; // Replace with your OMDb API key

  // Fetch movies based on user query
  const searchMovies = async (e) => {
    e.preventDefault(); // Prevent form submission
    setLoading(true);
    setError(null);

    const url = `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`; // Correctly format the URL

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search); // Update movie list
      } else {
        setError(data.Error); // Handle error (e.g., no results found)
        setMovies([]);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to fetch movies');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
<div className='ye'>
    <img src='/mov.jpg'></img>
    
        </div>
     
      <div className="container"> <h1>mOViE tImE </h1>
        <form onSubmit={searchMovies}>
          <div className='we'>
          <div className="input-group">
            <input
              type="text"
              className="form-con </div>rol"
              placeholder="Search for a movie..."
              value={query}
              onChange={(e) => setQuery(e.target.value)} // Update query state
            />
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
          </div>
        </form>
       

        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">{error}</p>}

        <div className="row">
          {movies.length > 0 &&
            movies.map((movie) => (
              <div className="col-md-4 my-3" key={movie.imdbID}>
                <MovieCard
                  title={movie.Title}
                  poster_path={movie.Poster}
                  release_date={movie.Year}
                  vote_average="N/A"
                  overview="N/A"
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

// MovieCard Component
const MovieCard = ({ title, poster_path, release_date, vote_average, overview }) => {
  const imageUrl = poster_path !== "N/A"
    ? poster_path
    : 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <>
    
    <div className="movie-card card   ">
      <img src={imageUrl} alt={title} className="movie-image card-img-top" />
      <div className="movie-content card-body ">
        <h3 className="card-title">{title}</h3>
        <p className="movie-overview card-text">{overview}</p>
        <p className="movie-info ">
          <span>Release Date: {release_date}</span> | <span>Rating: {vote_average}</span>
        </p>
      </div>
    </div>
    </>
  );
};

export default MovieSearch;



