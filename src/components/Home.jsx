import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2 style={styles.title}>Welcome to your Actionlist!</h2>
      <div>
        <NavLink to="/dashboard">
          Get to dashboard
        </NavLink>
      </div>
    </div>       
  )
}

const styles = {
  title: {
    margin: '2rem auto 2rem'
  }
}

export default Home;