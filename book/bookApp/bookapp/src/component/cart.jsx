import React, { useState, useEffect } from 'react';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const handleRemove = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Your Cart 🛒</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((book, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              margin: '10px auto',
              width: '300px',
              textAlign: 'center',
            }}
          >
            <img
              src={book.image}
              alt={book.title}
              style={{ width: '100%', height: '200px' }}
            />
            <h3>{book.title}</h3>
            <p>₹{book.price}</p>
            <button onClick={() => handleRemove(index)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
