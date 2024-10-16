import React, { useState, useEffect } from 'react';
import Listing from './components/listing';
import data from '../public/data/etsy.json';
import './App.css';

const App: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    try {
      setItems(data);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }, []);

  return (
    <div>
      <h1>Etsy Listings</h1>
      <Listing items={items} />
    </div>
  );
};

export default App;
