import React from 'react'
import { memo } from 'react'

const Brand = ({name,onClick,checked=""}) => {
  
  return (
    <div>
        <form action="" style={{display:'flex',marginBottom:9}}  onChange={()=>{onClick(name)}}>
                <input type="checkbox" id={name} style={{margin:0} } />
                <label htmlFor={name}>{name}</label>

        </form>
    </div>
  )
}

export default memo(Brand)