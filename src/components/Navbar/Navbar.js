import React from 'react';
// import styles from './Navbar.module.css';
const Navbar = ({totalItem}) => {
    return (
        <header className="w-full h-28 bg-slate-800">

<div className=" text-slate-200  h-full w-full flex justify-center items-center">
<h2 className="font-bold">Book Shopping</h2>
        <span className="w-6 h-6 bg-slate-300 rounded-full ml-3 flex justify-center items-center text-slate-500 text-sm font-bold">{totalItem}</span>
  
       </div>
        </header>
      );
}
 
export default Navbar;