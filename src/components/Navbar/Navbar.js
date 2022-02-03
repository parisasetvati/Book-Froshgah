import React from 'react';
import styles from './Navbar.module.css';
const Navbar = (props) => {
    return (
        <header className={styles.header}>
        <h2>Book Shopping</h2>
        <span>{props.totalItem}</span>
        </header>
      );
}
 
export default Navbar;