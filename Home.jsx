// /src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // For React Router navigation

const Home = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>Welcome to TopSack</h1>
        <nav>
          {/* React Router Links */}
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/crs">CRS</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <section className="hero">
          <h2>Leading Manufacturer of Industrial Bags</h2>
          <p>Delivering durable, large-scale packaging solutions worldwide.</p>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 TopSack. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
