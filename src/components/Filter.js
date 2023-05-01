import React from 'react'
import Brands from './Brands'
import Price from './Price'
import styles from './Filter.module.css'
import Style from './Style'
const Filter = () => {
  return (
    <div className={styles.container}>
        <Brands></Brands>
        <Price></Price>

        <Style></Style>
    </div>
  )
}

export default Filter