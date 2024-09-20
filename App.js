import React, { useState } from 'react';
import Weather from './APIs/Weather';
 import Movies from './APIs/Movies';
import Home from './componets/Homes';
import About from './componets/About';
import MyNavbar from './componets/MyNavbar'; // Corrected the import path
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Makeup from './APIs/Makeup';
import News from './APIs/News';
import Contact from './componets/Contact';
const App = () => {
  

  const [searchQuery, setSearchQuery] = useState('');
  // Function to handle sorting
  
  // const handleSearchChange = (event) => {
//   setSearchQuery(event.target.value.toLowerCase()); // Correctly update the search query
// };
  return (
    <>
      <Router>
        <MyNavbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/APIs/Makeup" element={<Makeup />} />
            <Route path="/APIs/Weather" element={<Weather />} />
            <Route path="/APIs/Movies" element={<Movies />} />
            <Route path="/APIs/News" element={<News />} />

         
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;


