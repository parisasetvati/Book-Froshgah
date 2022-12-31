import styles from "./AddCategory.module.css"
import React,{ useState } from 'react';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
const AddCategory = (props) => {

    const[categoris,setCategoris]=useState("");
    
    const addCategoryHandler=(e)=>{
        setCategoris(e.target.value);
    
       }
       const AddToSelectHandler=(e)=>{
           e.preventDefault();
           props.categoryHandler(categoris);
           setCategoris("");
       }
    
    return ( 
        <div className={styles.addCategory} >

        
        <form className={styles.container}>
            <div className={styles.inputs}>
        <label> Add New Category :</label>
        <input className={styles.input} type="text"   onChange={addCategoryHandler} value={categoris} ></input>
        </div>
        <div className={styles.inputs}>
        <label> Description :</label>
        <textarea className={styles.input} type="text"   onChange={addCategoryHandler} value={categoris} ></textarea>
        </div>
        <div>
        <button className={styles.btn} >Cancle</button> 

        <button className={styles.btn} onClick={AddToSelectHandler}>AddCategory</button> 
        </div>
       
        </form>

        </div>
     );
}
 
export default AddCategory;