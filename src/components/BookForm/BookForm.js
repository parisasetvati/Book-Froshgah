import React,{ useState } from 'react';
import styles from "./BookForm.module.css"
const BookForm = (props) => {
    const [bookName,setBookName]=useState("");
    const[categoryName,setCategoryName]=useState("");
    const changeHandler=(e)=>{
    
        setBookName(e.target.value);
    }
    const changeSelectHandler=(e)=>{
        setCategoryName(e.target.value);
      
    }
    const submitHanler=(e)=>{
        e.preventDefault();
        props.addHandler(bookName,categoryName);
        setBookName("");
        setCategoryName("");
    }
    return (  
        <div>
            <div className={styles.addproduct}>
            <form onSubmit={submitHanler} className={styles.container}>
                <div className={styles.inputs}>
                <label> Input Book Name :</label>
        <input className={styles.input} type="text"  value={bookName} onChange={changeHandler}  >
        </input>
                </div>
           
        <div className={styles.inputs}>
        <label> Select Book Category :</label>

<select className={styles.select}  onChange={changeSelectHandler}>
<option value="">selectCategory</option>
    <option value="ravanshenasi">ravanshenasi</option>
    <option value="tarikhi">tarikhi</option>
    <option value="elmi">elmi</option>
    {props.addcategory.map((p)=>{
return <option>{p}</option>
    })}
    </select>
        </div>
        
            <button className={styles.btn} type="submit">AddBook</button>
            </form>
            </div>
        </div>
    );
}
 
export default BookForm;
