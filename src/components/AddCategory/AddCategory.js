// import styles from "./AddCategory.module.css"
import React,{ useState } from 'react';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
const AddCategory = ({categoryHandler}) => {


    const[categoris,setCategoris]=useState({category:"",description:""});
    const[isShow,setIsShow]=useState(false);
    const addCategoryHandler=({target})=>{

        console.log(target);

         setCategoris({...categoris,[target.name]:target.value});
    
       }
       const AddToSelectHandler=(e)=>{
      e.preventDefault();
         categoryHandler(categoris);
       setCategoris({category:"",description:""});
        
       }
    
    return ( 
    <section className="w-full ">
        
        <div className={`max-[900px]:w-4/5  max-[900px]:mx-auto bg-slate-800 w-2/5 h-1/5 flex justify-center items-center rounded-md mx-auto mt-10  p-6  ${isShow ? "" : "hidden"}  `}  >

        
        <form className="flex  flex-col   text-xs w-full my-5 text-slate-200">
            <div className="flex flex-row  mb-5 w-full ">
        <label className='text-xs w-24  text-slate-200 '> Category :</label>
        <input className="w-2/5 h-8 rounded-md  bg-transparent focus:outline focus:outline-none  focus:outline-offset-0 focus:outline-transparent focus:border focus:border-slate-200 " type="text"   onChange={addCategoryHandler} value={categoris.category} name="category" ></input>
        </div>
        <div className="flex flex-row mb-5  w-full">
        <label className=' text-xs w-24 text-slate-200'> Description :</label>
        <textarea className="w-3/5 h-15 rounded-md  bg-transparent  border-slate-500" type="text"   onChange={addCategoryHandler} value={categoris.description} name="description"></textarea>
        </div>
        <div className='mt-3 font-bold flex justify-center items-center'>
        <button  className="w-32  h-8 text-xs text-slate-500  border  border-slate-500 rounded-md mr-6 " onClick={()=>setIsShow(!isShow)}>Cancle</button> 

        <button className="w-32 h-8 bg-slate-600 text-xs text-slate-200 rounded-md " onClick={AddToSelectHandler}>AddCategory</button>
        </div>
       
        </form>

        </div>
         <button className={`${isShow && "hidden"} g-transparent  text-slate-200 text-xs font-bold ml-72 mt-5  hover:text-slate-400 duration-150`} onClick={()=>{setIsShow(!isShow)}}>Add New Category</button>
         </section>
     );
}
 
export default AddCategory;