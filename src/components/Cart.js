import React from 'react'
import { useSelector } from 'react-redux'
import DeliveryAdress from './DeliveryAdress'
    
function Cart() {
  const data=useSelector(state=>state.products.products)
  console.log(data)
  return (
    <div>{data.map(d=>{
      return <DeliveryAdress data={d}/>
    })}</div>
  )
}

export default Cart