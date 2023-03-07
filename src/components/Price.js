import React from 'react'
import styles from './Price.module.css'
const Price = () => {
  return (
    <div>
      <p className={styles.text}>Price</p>
      <input type="text" placeholder='$Min' className={styles.input} />
      <input type="text"  placeholder='$Max' className={styles.input}  style={{marginLeft:"3px"}}/>
      <button className={styles.button}>Go</button>
    </div>
  )
}

export default Price
