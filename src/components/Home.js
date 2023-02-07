import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCategory from "./AddCategory/AddCategory";
import BookForm from "./BookForm/BookForm";
import BookList from "./BookList/BookList";
import styles from "./Home.module.css";
import Navbar from "./Navbar/Navbar";
import Search from "./Search/Search.js";
import Sort from "./Sort/Sort";




const Home = () => {
  const [productlist, setProductlist] = useState([]);
  const [addcategory, setAddCategory] = useState([]);
  const[filterproduct, setFilterProduct]=useState([]);
  const[searchValue,setSearchValue]=useState("");
  const[sort,setSort]=useState("latest");
 
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
  };

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
  const searchHandler=(e)=>{
setSearchValue(e.target.value.trim().toLowerCase());
  }
  const sortHandler=(e)=>{
    setSort(e.target.value);
      }
  const filterSearchTitle=(array)=>{
    console.log(array);
    return array.filter((p)=> p.productName.toLowerCase().includes(searchValue))};

 const filterSort=(array)=>{
 
  let sortProducts=[...array];
  return sortProducts.sort((a,b)=>{
    if(sort==="latest"){
      return new Date(a.createdArt)>new Date(b.createdArt)?-1 :1}
      else if  (sort==="earlist"){
      return new Date(a.createdArt)>new Date(b.createdArt)? 1 :-1}
    })
  }
  useEffect(()=>{
    let result=productlist;
    result=filterSearchTitle(result);
    result=filterSort(result);
    setFilterProduct(result);
  },[productlist,searchValue,sort]);
  useEffect(()=>{
    const savedProducts=JSON.parse(localStorage.getItem("products")) || [];
    const savedCategories=JSON.parse(localStorage.getItem("categories")) || [];
    setProductlist(savedProducts);
    setAddCategory(savedCategories);
  },[]);
  useEffect(()=>{  if (productlist.length){
    localStorage.setItem("products",JSON.stringify(productlist))
  }},[productlist]);
  useEffect(()=>{  if (addcategory.length){
    localStorage.setItem("categories",JSON.stringify(addcategory))
  }},[addcategory]);
  return (
    <div>
      <Navbar totalItem={productlist.filter((p) => p.id > 0).length} />
      
     
      <AddCategory categoryHandler={AddToCategoryHandler} />
      <BookForm addproduct={addproduct} addcategory={addcategory} />
     <Search  searchValue={searchValue} onSearch={searchHandler} />
   <Sort sort={sort} onSort={sortHandler}/>
     <BookList productlist={filterproduct} categories={addcategory}  setProductlist={setProductlist}/>
     
    
     
     
      
    </div>
  );
};

export default Home;
