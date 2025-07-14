// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>🛍️ Saree Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((p) => (
          <div
            key={p._id}
            style={{
              width: '200px',
              margin: '10px',
              padding: '10px',
              border: '1px solid #ccc',
            }}
          >
            <img src={p.image} alt={p.name} style={{ width: '100%' }} />
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
