import React from 'react'
import Color from './Color'
let colors =["red",'silver',"white","brown","blue","black","pink","orange","yellow","green","grey","wheat"]
const Colors = () => {
  return (
    <div>
      <p>Watch Band Color</p>
      <div style={{display:"flex",flexWrap:"wrap",gap:5,marginRight:20}}>
      {colors.map((color,index)=>{
        return <Color color={color} key={index}></Color>
      })}
      </div>
    </div>
  )
}

export default Colors
