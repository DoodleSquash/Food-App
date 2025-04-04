import React, { use, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link, useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount,setToken,token,food_list} = useContext(StoreContext);
  const navigate=useNavigate();
  const logout =()=>{
    
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }




  return (
    <div className='navbar'>
       <Link to='/'><img src={assets.logo} className='logo'/></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact us")} className={ menu==="contact us"?"active":""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} /></Link>
          <div className={food_list.length > 0 && getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)} className='navbar-button'>Sign In</button>
        : <div className="navbar-profile">
          <img src={assets.profile_icon} />
          <div className="nav-profile-dropdown">
            <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p> Orders </p></li>
            <hr />
            <li onClick={logout}>< img src={assets.logout_icon} alt="" /><p> Logout </p></li>
          </div>
        </div>
        }
      
        
        
      </div>
    </div>
  )
}

export default Navbar