import React, { useState, useEffect } from 'react';

import './styles.css';

const SalesTime: React.FC = () => {
  const [products, setProducts] = useState(0);

  useEffect(() => {
    function time() {
      setTimeout(async () => {
        const number = (await Math.floor(Math.random() * 10000)) / 8;

        setProducts(Number(number.toFixed(2)));
      }, 5000);
    }
    time();
  }, [products]);

  return (
    <div className="averageSellingTime">
      <h1>Custo operacional</h1>
      <p>
        <span> {products} </span>
        lucro + entrega
      </p>
    </div>
  );
};

export default SalesTime;
