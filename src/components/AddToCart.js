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

  return (
    <div>
    <div className={styles.mainCart} onClick={()=>{addToCart(data)}}>
        <img src={add} alt="" className={styles.img}/>
        <p className={styles.word} >Add to Cart</p>
       
    </div>
    <Modal 
         isOpenPortal={isOpenPortal}
         setIsOpenPortal={setIsOpenPortal}
         product={data}
         
        ></Modal>
    </div>
  )
}

export default memo(AddToCart);