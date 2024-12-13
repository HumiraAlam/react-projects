import React from 'react'
import styles from'./Navigation.module.css'

export default function Navigation() {
  return (
    <nav className={styles.container}>
        <div>
            <img src="/images/logo.png" alt="logo" />
        </div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>

    </nav>
  )
}
