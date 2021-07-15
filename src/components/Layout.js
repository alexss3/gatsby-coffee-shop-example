import React from 'react';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div>
      <header id={styles.header}>
        <div id={styles.inner}>
          <h1>Joe's Coffee Shop</h1>
        </div>
      </header>
      <main id={styles.main}>
        {children}
      </main>
    </div>
  );
}
