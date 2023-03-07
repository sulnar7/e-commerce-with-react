import React from 'react'
import banner from '../assets/img/banner.png'
import styles from './Banner.module.css'
const Banner = () => {
  return (
    <div className={styles.container}>
        <img src={banner} alt="" className={styles.img}/>
        <div className={styles.onImg}>
            <p className={styles.onImgText}>SHINOLA‘ S BEST</p>
        </div>
    </div>
  )
}

export default Banner