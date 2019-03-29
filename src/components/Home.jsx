import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to your Actionlist!</h2>
      <div>
        <NavLink to="/dashboard">
          Get to dashboard
        </NavLink>
      </div>
    </div>       
  )
}

export default Home;