import React, { useState } from 'react'
import style from './Search.module.css'
import searchIcon from '../assets/img/Vector.png'
import Icon from './Icon'
import { useDispatch, useSelector } from 'react-redux'
import { productActions, searchProductAction } from '../stroe'
const Search = () => {
  const selector=useSelector(state=>state.products)
  const dispatch=useDispatch()
  let searchChange=(e)=>{
    dispatch(searchProductAction.searchProducts(e.target.value))
  console.log(selector,"selector")
    
  }
  return (
    <div className={style.container}>
      <input type="text" placeholder="Search" className={style.searchInput} onChange={(e)=>searchChange(e)}/>
      <Icon img={searchIcon} className={style.searchButton}/>
    </div>
  )
}

export default Search
