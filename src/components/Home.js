import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCategory from "./AddCategory/AddCategory";
import BookForm from "./BookForm/BookForm";
import BookList from "./BookList/BookList";
import styles from "./Home.module.css";
import Navbar from "./Navbar/Navbar";




const Home = () => {
  const [productlist, setProductlist] = useState([]);
  const [addcategory, setAddCategory] = useState([]);
  const addproduct = (product) => {
  // console.log(product);
  if(! product.productName && !product.quantity && ! product.categoryId)  {
    toast.error("please Enter Product Complete!",{
        
      className:'toast-message'
 });
    // NotificationManager.warning('Warning message', 'Please input ProductName', 3000)
  }
  else if (! product.productName){
    toast.error("please Enter Product Name!",{
        
      className:'toast-message'
 });
  }
  else if(! product.quantity){
    toast.error("please Enter Product quantity!",{
        
      className:'toast-message'
 });;
  }
  else if(! product.categoryId){
    toast.error("please Enter Product Category!",{
        
      className:'toast-message'
 });
  }
    else{
  //   // console.log(bookName, categoryName);
    const newProduct= {...product , createdArt: new Date().toISOString(),id:new Date().getTime()}
    setProductlist([
      ...productlist,newProduct
    ]);
    toast.success("Product Added Success.",{
        
      className:'toast-message'
 });
   };
  }
  
   
 
  
  const AddToCategoryHandler = (categoris) => {
    if(!categoris.category && !categoris.description)  {
      
      
        toast.error("Please Enter Category Complete!",{
        
          className:'toast-message'
     });
    }
    else if(! categoris.category){
      toast.error("Please Enter Category Name!",{
      
        className:'toast-message'
   });
    }
    else if(! categoris.description){
      toast.error('Please Set Description!', {
      
         className:'toast-message'
    });
      
    }
    else{
      const newCategory= {...categoris , createdArt: new Date().toISOString(), id:new Date().getTime()}
    setAddCategory([...addcategory,newCategory]);
    
    toast.success("Category Added Success", {
      closeButton: true,
      
       className:'toast-message'
   });
    
    }
  };
  
  return (
    <div>
      <Navbar totalItem={productlist.filter((p) => p.id > 0).length} />
      
     
      <AddCategory categoryHandler={AddToCategoryHandler} />
      <BookForm addproduct={addproduct} addcategory={addcategory} />
     
     
     <BookList productlist={productlist} categories={addcategory}  setProductlist={setProductlist}/>
     
    
     
     
      
    </div>
  );
};

export default Home;
