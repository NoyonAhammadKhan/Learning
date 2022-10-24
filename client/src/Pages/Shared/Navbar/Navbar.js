import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link>Courses</Link></li>
        <li tabIndex={0}>
          <Link className="justify-between">
            Blog
          </Link>
        </li>
        <li><Link>FAQ</Link></li>
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li className='mr-5'><Link to='/'> Courses</Link></li>
      <li tabIndex={0}>
        <Link to='/' className='mr-5'>
         Blog
        </Link>
       
      </li>
      <li><Link className='mr-5'>FAQ</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link className="btn">Get started</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;