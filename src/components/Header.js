import React from 'react';
import logo from '../assets/img/blueshop.png';
import style from "./Header.module.css"
import Icon from './Icon';
import Search from './Search';
import profileIcon from '../assets/img/profile.png';
import walletIcon from '../assets/img/wallet.png';
import cartIcon from '../assets/img/cart.png';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { productActions } from '../stroe';


const Header = () => {
  const selector = useSelector(state => state.products)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(productActions.getTotals())
  },[selector,dispatch])
  
  return (
    <div className={style.container}>
<NavLink to="/">
      <div className={style.logo}>
        <div className={style.divLogo}></div>
        <img src={logo} className={style.imgLogo} alt="" />
      </div>
      </NavLink>
      <div>
        <Search></Search>
      </div>
      <div>
        <Icon img={profileIcon} />
      </div>
      <div>
        <Icon img={walletIcon} />
      </div>
      <div className={style.cart}>
        <div >
          <NavLink to="/Cart">
          <Icon img={cartIcon} />
          </NavLink>
        </div>
        {selector.products.length>0 &&
          <p className={style.cartCount}>{selector.products.length}
          {console.log(selector)}
          </p>
        }
      </div>

    </div>
  )
}

export default Header