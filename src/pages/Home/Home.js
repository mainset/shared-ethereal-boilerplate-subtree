import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home-page">
    <div>Hello world</div>
    <br />
    <Link to="/example">Check example page</Link>
  </div>
);

export default Home;
