import React, { useState } from 'react';
import './Book.css';

function Book({ title, price, image }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    
    if (count < 10) {
      setCount(prevCount => prevCount + 1);
    } else {
      alert('⚠️ You can only add up to 10 copies of this book!');
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div className="book-box">
      <img src={image} alt={title} height={100} width={100} />
      <h2>Title: {title}</h2>
      <p>Price: ₹{price}</p>

      <div className="btn-container">
        <button onClick={handleDecrement}>-</button>
        <span style={{ margin: '0 10px' }}>{count}</span>
        {/* <button onClick={handleIncrement} disabled={count >= 10}>+</button> */}
        <button onClick={handleIncrement} >+</button>
      </div>

      {/* Optional total display */}
      <p>Total: ₹{price * count}</p>
    </div>
  );
}

export default Book;
