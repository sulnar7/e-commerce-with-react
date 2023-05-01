import React, { useEffect, useState,memo } from 'react'
import { getData } from '../service/post'
import styles from './Product.module.css'
import AddToCart from './AddToCart'
import { useSelector } from 'react-redux'
import ReactStars from "react-rating-stars-component";

const Products = () => {
  const filterCategory=useSelector(state=>state.filterProducts.filterProducts);
  const filterSearch=useSelector(state=>state.searchProducts.searchProducts)

  const [data, setData] = useState();
  const [loading,setLoading]=useState(true)
  const [httpErrors,setHttpErrors]=useState(null)
  useEffect(() => {
    getData().then(res => { 
      if(!res.length){
        console.log(res)
        throw new Error("Something is wrong")
      }
      setData(res)
      setLoading(false)
    }).catch(error=>{
      setLoading(false)
      setHttpErrors(error.message) 

    })
    

  },[])
  if(loading){
    return <div className={styles.loaderMain}><div className={styles.loader}></div></div>
  }
  if(httpErrors){
    return <section><p>{httpErrors}</p></section>
  }
  return (
    <div className={styles.main}>
   { data?.map(data=>{
    if(filterCategory?.length==0?true:filterCategory?.includes(data.category)){
     
      if(filterSearch.length==0?true:data.title.toLowerCase().includes(filterSearch)){
       
    return  <div className={styles.product} >
      <div className={styles.productImgCon}>
        <img className={styles.productImg} src={data?.image} alt="" />
      </div>
      <div className={styles.productName}>
        <div >
          <p>{data?.title.length > 10 ? data.title.slice(0, 10) + "..." : ""}</p>
          {  <ReactStars
    count={5}
    size={14}
    value={data.rating.rate}
    isHalf={true}

    activeColor="#ffd700"
    edit={false}
  />}
  <p className={styles.rating}>{data.rating.rate}</p>
        </div>

        <div className={styles.productBottom}>
          <p className={styles.productPrice}>&#36;{data?.price}</p>
          <AddToCart data={data}/>
        </div>
      </div>

    </div>
      }
  }
    })}
    </div>

  )
}

export default memo(Products)