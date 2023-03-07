import React, { useState } from 'react'
import Brand from './Brand'
import styles from './Brands.module.css'
import downIcon from '../assets/img/downIcon.png'
const Brands = () => {
    let brands=['Invicta','Fossil','Bulova','Michael kors','GOLDEN HOURS','Casib'];
    const [showMore,setShowMore]=useState({type:false,
                                           name:"See More"});
    
    let handleClick=()=>{
        setShowMore({
            type:!showMore.type,
            name:showMore.type?"See more":"See less"
        })
    }
  return (
    <div className={styles.container}>
        <h2>Brands</h2>
        {brands.map((brand,index)=>{
            if(index<3&&!showMore.type){
                return <Brand name={brand} key={index}/>
            }
            else if(showMore.type){
                return <Brand name={brand}  key={index}/>
            }
         
        })}

        <div className={styles.seeMore} onClick={handleClick}>
            <img src={downIcon} alt="" className={styles.seeMoreImg}/>
            <p style={{margin:0}}>{showMore.name}</p>
        </div>

    </div>
  )
}

export default Brands
