const Navbar = ({totalItem}) => {
    return (  
        <header className="w-full h-32 bg-slate-800" >
        <div className='flex justify-center items-center h-full w-full'>
        <h2 className="font-bold text-slate-300">Book Shopping</h2>
         <span className="w-6 h-6 bg-slate-300 rounded-full ml-3 flex justify-center items-center text-slate-500 text-sm font-bold">{totalItem}</span>
   
         </div>
         </header>
    );
}
 
export default Navbar;