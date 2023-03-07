import React from 'react'
import Brand from './Brand'
import { useDispatch, useSelector } from 'react-redux'
import { filterProductAction  } from '../stroe'
let styles=["men's clothing","women's clothing",'electronics','jewelery','Sport']
const Style = () => {
  const dispatch=useDispatch()
  const selector=useSelector(state=>state.filterProducts.filterProducts)


  let handleClick=(data)=>{
      
      if(!selector?.includes(data)){
        dispatch(filterProductAction.filterProducts(data))

      }
      else{ 
        dispatch(filterProductAction.filterProductsDel(data))
      
      } 
      
     

  }
  console.log(selector,"selector")
  return (                                                              
    <div>
      <p>Watch Style</p>
      {styles.map((style,index)=>{
        return <Brand name={style} key={index} onClick={()=>{handleClick(style)}} checked={selector}></Brand>

      })}
    </div>
  )
}

export default Style
