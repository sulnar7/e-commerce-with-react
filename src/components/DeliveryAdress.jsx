import React from 'react'
import { useSelector } from 'react-redux'
import styles from './DeliveryAddress.module.css'
function DeliveryAdress({data}) {
  return (
    <div>
        <div className={styles.main}>
            <div className={styles.img}>
                <img src={data.image} alt="" />
            </div>
            <div className={styles.data}>
                <p>{data.title}</p>
                <p>{data.price}</p>
            </div>
            <div className={styles.counter}>
                    <span>-</span>1 <span>+</span>
            </div>
        </div>
    </div>
  )
}

export default DeliveryAdress