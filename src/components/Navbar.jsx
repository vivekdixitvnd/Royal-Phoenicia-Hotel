import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Royal Phoenicia</div>
      <ul className={styles.navLinks}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Rooms</a></li>
        <li><a href="#">Dining</a></li>
        <li><a href="#">Facilities</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className={styles.bookBtn}>Book Now</button>
    </nav>
  );
};

export default Navbar; 