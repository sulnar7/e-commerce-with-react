import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './DeliveryAddress.module.css'
import { productActions } from '../stroe'
import { useEffect } from 'react'
function DeliveryAdress({data}) {
  useEffect(()=>{
    dispatch(productActions.getTotals())
  },[data])
  console.log(data)
  const dispatch=useDispatch()
  const decrease=(data)=>{
    dispatch(productActions.decreaseCart(data))
  }
  const increase=(data)=>{
    dispatch(productActions.increaseCart(data))
  }
  return (
    <div>
        <div className={styles.main}>
            <div className={styles.img}>
                <img src={data.image} alt="" />
            </div>
            <div className={styles.data}>
                <p>{data.title}</p>
                <p>{data.cartTotalAmount}</p>
            </div>
            <div className={styles.counter}>
                    <span onClick={()=>decrease(data)}>-</span>{data.cartTotalQuantity} <span onClick={()=>increase(data)}>+</span>
            </div>
        </div>
    </div>
  )
}

export default DeliveryAdress