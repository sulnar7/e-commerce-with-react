import React from 'react';
import style from './Icon.module.css';

const Icon = ({img,className}) => {
  return (
    <button className={className?className:style.icon} id="basket-item">
                <img src={img} alt="" />
                
  </button>
  )
}

export default Icon