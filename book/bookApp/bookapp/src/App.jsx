import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // ✅ Added Link import
import Home from './component/Home';
import Login from './component/login';
import Nav from './component/Navbar';
import Register from './component/registration';
import Cart from './component/cart';


function App() {
  return (
    <>
      <Nav />

      {/* Simple navigation links */}
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <Link to="/" style={{ margin: '0 10px', textDecoration: 'none', color: 'blue' }}>
          Home
        </Link>
        <Link to="/login" style={{ margin: '0 10px', textDecoration: 'none', color: 'blue' }}>
          Login
        </Link>
        <Link to="/register" style={{ margin: '0 10px', textDecoration: 'none', color: 'blue' }}>
          Register
        </Link>
        <Link to="/cart" style={{ margin: '0 10px', textDecoration: 'none', color: 'blue' }}>
          Cart
        </Link>
      </div>

      {/* Home Page Books Section */}
     

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
     
    </>
  );
}

export default App;
