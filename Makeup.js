import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Makeups.css';

function Makeup() {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err));
  }, []);

  // Function to handle sorting
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  // Function to handle search input changes
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filtering and sorting data
  const filteredAndSortedData = [...data]
    .filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase())) // Ensure search is case-insensitive
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  return (
    <>
      {/* Add your navigation bar component here if required */}
      {/* <MyNavbar /> */}

      <div className="hello col-sm-12">
        <img src='/img6.png' alt="Weather" />
      </div>

      {/* Search Bar and Sort Selector */}
      <div className='d-flex justify-content-between mb-4  bg-custom'>
        {/* Search Input */}
        <input
          type='text'
          id='searchBar'
          className='form-control w-75 mr-2'
          placeholder='Search for products...'
          onChange={handleSearchChange}
          value={searchQuery}
        />
        {/* Sort Dropdown */}
        <select className="form-control w-25  bg-primary" value={sortOrder} onChange={handleSortChange}>
          <option value="asc bg-light ">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {/* Products List */}
      <div className='container'>
        <div className='row'>
          {filteredAndSortedData.length > 0 ? (
            filteredAndSortedData.map((product) => (
              <div className='col-sm-12 col-md-6 col-lg-4 mb-4' key={product.id}>
                <div className="card h-100">
                  <img src={product.image_link} className="card-img-top" alt={product.name} />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h4 className="card-title text-center">{product.name}</h4>
                    <h5 className='text-center'>
                      <button className='btn btn-outline-danger'>
                        {product.price ? `$${product.price}` : 'Price not available'}
                      </button>
                    </h5>
                    <div className='text-center mt-auto'>
                      <button className='btn btn-primary'>
                        <a href={product.product_link} target="_blank" rel="noopener noreferrer" className="text-white">
                          View Details
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-12">No products found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Makeup;











