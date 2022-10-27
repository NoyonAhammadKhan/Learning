import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import {GrLogout} from 'react-icons/gr';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
  const [dark,setDark]=useState(false);
  const handleDark = ()=>{
    setDark(!dark)
  }
  const {user,logoutUser}=useContext(AuthContext);
    return (
     <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li className='text-2xl'><Link to='/courses'>Courses</Link></li>
        <li tabIndex={0} className='text-2xl'>
       <Link to='/blogs'>Blog</Link>
        </li>
        <li className='text-2xl'><Link to='/faq'>FAQ</Link></li>
      </ul>
    </div>
    <Link to={'/'}><span className='text-3xl mr-2'>{`</>`}</span><span className='text-2xl'>Code.Pro</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <li className='text-2xl'><Link to='/courses'>Courses</Link></li>
        <li tabIndex={0} className='text-2xl'>
       <Link to='/blogs'>Blog</Link>
        </li>
        <li className='text-2xl'><Link to='/faq'>FAQ</Link></li>
    </ul>
  </div>
  
  <div className="navbar-end">
    {dark ? <button className='btn btn-outline mr-4' onClick={handleDark}><FaSun/></button>: 
    <button className='btn btn-outline mr-4' onClick={handleDark} ><FaMoon></FaMoon></button>}
    {user ?
    <div className='inline flex'> 
    <span className='mr-4'><img style={{width:'50px',borderRadius:'50%'}} src={user.photoURL} title={user.displayName}/></span>
    <span className="btn" onClick={logoutUser}>Logout</span>
    </div>
    : 
    
    (<Link to='/login' className="btn">Login</Link>)}
  </div>
 
</div>
    );
};

export default Header;