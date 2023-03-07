import React from 'react'

const Brand = ({name,onClick,checked=""}) => {
  
  return (
    <div>
        <form action="" style={{display:'flex',marginBottom:9}} >
                <input type="checkbox" id={name} style={{margin:0} } />
                <label htmlFor={name} onClick={()=>{onClick(name)}}>{name}</label>

        </form>
    </div>
  )
}

export default Brand