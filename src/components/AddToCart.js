import React, { memo, useState } from 'react'

import styles from './AddToCart.module.css';

import add from '../assets/img/add.svg'
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../stroe';
import Modal from './Modal';
function AddToCart({data}) {
  const [isOpenPortal, setIsOpenPortal] = useState(false);
  
  const dispatch=useDispatch();
  const addToCart=(product)=>{
    dispatch(productActions.addToCart(product));
    setIsOpenPortal(true)
  }
  const selector=useSelector(state=>state.products)
  console.log(selector)
  return (
    <div className={styles.mainCart}>
        <img src={add} alt="" className={styles.img}/>
        <p className={styles.word} onClick={()=>{addToCart(data)}}>Add to Cart</p>
        <Modal 
         isOpenPortal={isOpenPortal}
         setIsOpenPortal={setIsOpenPortal}
         product={data}
         
        ></Modal>
    </div>

  )
}

export default memo(AddToCart);