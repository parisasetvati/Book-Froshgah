import styles from "./BookList.module.css"
import { BiTrash,BiMessageSquareEdit} from "react-icons/bi";
import { useState } from "react";
import ProductEdit from "../ProductEdit/ProductEdit";
import BookForm from "../BookForm/BookForm";
const BookList = ({productlist,categories,setProductlist,addcategory,onUpdate}) => {
  const[edit,setEdit]=useState({productName:"",id:null,category:"",creatEdit:""})
  // const[newValue,setnewValue]=useState(edit.id ? {productName:edit.productName, id:edit.id, quantity:edit.quantity} :{productName:"", id:edit.id, quantity:0})
  
    const findCategory=(categoryId)=> {
  return  categories.find((c)=>c.id === parseInt(categoryId)).category};
  const deleteProduct=(id)=>{
 const filterProduct= productlist.filter((p)=>p.id !== id);
setProductlist(filterProduct);

  }
  const onUpdateProduct = (product) => {
    
    onUpdate(edit.id ,product);
    setEdit({productName:"",id:null,category:"",creatEdit:""})
    // console.log(edit);
  //   e.preventDefault();
   
    // setnewValue({productName:"", id:"", quantity:0});
  };
//   const editProduct=(product)=>{
// //onEditProduct(id,newValue);

//  console.log(product);
//  setEdit(product);
//   }

  const renderProduct=()=>{
   return <div  className="flex flex-col  h-full justify-center items-center"  >
    {productlist.map((products)=>{
    // console.log(products);
     return <div  key={products.id} className="bg-slate-800 w-5/6 h-94 py-4 px-6 text-sm font-bold  flex  items-center justify-between  rounded-md  text-slate-200  mx-20 my-5">

     
      
      <div className="flex items-center">
      <span className="text-lg mx-6  w-20 "> {products.productName} </span> 
      <span className="mx-4  w-28  h-6 bg-slate-300 border-2 border-slate-700 rounded-md px-5 py-2  flex justify-center items-center text-slate-500 text-sm ">{findCategory(products.categoryId)}</span> 
 
     <span className=" mx-4 w-6 h-6 bg-slate-300 rounded-full ml-3  flex justify-center items-center text-slate-500 text-sm ">{products.quantity}</span> 
 
   
     <button className="mx-4 flex justify-center items-center border-red-700 border-2 w-8 h-8 bg-transparent text-slate-200 rounded-md text-xs" onClick={()=>deleteProduct(products.id)}><BiTrash className=" text-md font-bold" /></button>
     <button className="mx-4 flex justify-center items-center border-slate-400 border-2 w-8 h-8 bg-transparent text-slate-200 rounded-md text-xs"onClick={()=>setEdit(products)} ><BiMessageSquareEdit className=" text-lg font-bold" /></button>
     <div>
      <div className="flex  flex-col item-center justify-center ">
        <label className="text-sm ">Date Create:</label>
        <span className="mx-1  w-20 h-4 bg-slate-300 border-2 border-slate-700  rounded-md px-8 py-3 flex justify-center items-center text-slate-500 text-sm ">{new Date(products.createdArt).toLocaleDateString("fa-IR")}</span> 
        </div>
     <div className="flex flex-col item-center justify-center ">
     <label className={`${products.creatEdit ? "": "hidden"} text-sm`}>Last Edit:</label>
     <span className={`${products.creatEdit ? "": "hidden"} mx-1  w-20 h-10 bg-slate-300 border-2 border-slate-700      rounded-md px-8 py-3 flex justify-center items-center text-slate-500 text-sm "`}>{ new Date(products.creatEdit).toLocaleString("fa-IR")}</span> 
      </div>
    
      </div>
      </div>
         </div>})
         };
 
 </div> 

  };
    return (  
      <div>
 {edit.id ? <BookForm   addproduct={onUpdateProduct} addcategory={addcategory}  edit={edit}/> :  renderProduct()}
      </div>
     
    
)};
 
export default BookList;