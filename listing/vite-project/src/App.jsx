import React, { useState, useEffect } from 'react';
import Listing from './components/listing';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/data/etsy.json')
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error loading data:', error));
  }, []);

  return (
    <div>
      <h1>Etsy Listings</h1>
      <Listing items={items} />
    </div>
  );
};

export default App;
