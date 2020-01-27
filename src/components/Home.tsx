import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  title: {
    margin: '8rem auto 2rem'
  }
}

const Home: React.FC = () => {
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

export default Home;