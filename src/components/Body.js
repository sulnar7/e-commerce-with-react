import React from 'react'
import Banner from './Banner'
import Filter from './Filter'
import styles from './Body.module.css'
import Products from './Products'
const Body = () => {
  return (
    <div className={styles.container}>
      <Filter/>
      <div style={{width:"100%",marginLeft:"49px"}}>
      <Banner/>
      <p>Best Selling<hr/></p> 
      <Products/>
      </div>
    </div>
  )
}

export default Body
