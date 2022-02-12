import React, { useState} from 'react';
import styles from './Home.module.css';
// import Content from "./Content/Content";
import Navbar from './Navbar/Navbar'
const Home = () => {

    const [bookName,setBookName]=useState("");
    const[categoryName,setCategoryName]=useState("");
    const[productlist,setProductlist]=useState([]);
   const[categoris,setCategoris]=useState("");
   const[addcategory,setAddCategory]=useState([]);
  

const changeHandler=(e)=>{
    
  setBookName(e.target.value);
 

}
const changeSelectHandler=(e)=>{
    setCategoryName(e.target.value);
  
}
const addHandler=()=>{
if(!bookName){
  toast ('please inter book name')
  return
}
    setProductlist([...productlist,{title:bookName,category:categoryName,id:productlist.length+1}]  ) 
    setBookName("");
 
    console.log(productlist);
    
   }
  const addCategoryHandler=(e)=>{
    setCategoris(e.target.value);

   }

const AddToSelectHandler=()=>{
  setAddCategory([...addcategory,categoris]);
  setCategoris("");

  // alert("New category added");
}

    return ( 
      <div>
         <Navbar totalItem={productlist.filter((p)=>p.id>0).length}/>
      <div className={styles.container}>
        
        <div className={styles.addproduct}>
            
            <label> Select Book Name :</label>
        <input className={styles.input} type="text"  value={bookName} onChange={changeHandler}  >
        </input>
        
        <label> Select Book Category :</label>

        <select className={styles.select}  onChange={changeSelectHandler}>
            <option value="ravanshenasi">ravanshenasi</option>
            <option value="tarikhi">tarikhi</option>
            <option value="elmi">elmi</option>
          
            {addcategory.map((p)=>{
      return <option>{p}</option>
     })}
           
        
           
    
        </select>
     
        <button className={styles.btn} onClick={addHandler}>AddBook</button>
        <label> Add Category :</label>
        <input className={styles.input} type="text"   onChange={addCategoryHandler} value={categoris} ></input>
        <button className={styles.btn} onClick={AddToSelectHandler}>AddCategory</button>
        
        </div>
        <div className={styles.showproduct}>
        {productlist.map((product)=>{
        return <div>
         <label> BookName:</label><p className={styles.product}> {product.title} </p> 
         <label> Category:</label><p className={styles.product}>{product.category}</p> 
         <label> Id:</label>  <p className={styles.product}>{product.id}</p> 
            </div>}
        )}
      </div> 
    </div>
    </div>
     );
}

         
     
       
 
export default Home;