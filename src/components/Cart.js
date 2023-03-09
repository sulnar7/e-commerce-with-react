import React from 'react'
import { useSelector } from 'react-redux'

import { useDispatch,  } from 'react-redux'
import styles from './DeliveryAddress.module.css'
import { productActions } from '../stroe'
import { useEffect } from 'react'    
function Cart() {
  const data=useSelector(state=>state.products)
  console.log(data)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(productActions.getTotals())
  },[data,dispatch])
  const decrease=(data)=>{
    dispatch(productActions.decreaseCart(data))
  }
  const increase=(data)=>{
    dispatch(productActions.increaseCart(data))
  }

  return (
    <div>{data.products.map(product=>{
      
      return (
        <div>
            <div className={styles.main}>
                <div className={styles.img}>
                    <img src={product.image} alt="" />
                </div>
                <div className={styles.data}>
                    <p>{product.title}</p>
                    <p>{product.price*product.cartQuantity}</p>
                </div>
                <div className={styles.counter}>
                        <span onClick={()=>decrease(product)}>-</span>{product.cartQuantity} <span onClick={()=>increase(product)}>+</span>
                </div>
            </div>
        </div>
      )
    })}
    <div>Subtotal : {data.cartTotalAmount.toFixed(2 )}</div>
    <div>Total Quantity : {data.cartTotalQuantity}</div>
    </div>
  )
}

export default Cart