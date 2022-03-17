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

        
        <div className={styles.container}>
            <div className={styles.inputs}>
        <label> Add New Category :</label>
        <input className={styles.input} type="text"   onChange={addCategoryHandler} value={categoris} ></input>
        </div>
        <button className={styles.btn} onClick={AddToSelectHandler}>AddCategory</button> 
        </div>
        </div>
     );
}
 
export default AddCategory;