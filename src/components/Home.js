import React, { useState } from "react";
import AddCategory from "./AddCategory/AddCategory";
import BookForm from "./BookForm/BookForm";
import BookList from "./BookList/BookList";
import styles from "./Home.module.css";
import Navbar from "./Navbar/Navbar";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const Home = () => {
  const [productlist, setProductlist] = useState([]);
  const [addcategory, setAddCategory] = useState([]);
  const addHandler = (bookName, categoryName) => {
  if(!bookName)  {
    NotificationManager.warning('Warning message', 'Please input BookName', 3000)
  }
   else{
    console.log(bookName, categoryName);
    setProductlist([
      ...productlist,
      { title: bookName, category: categoryName, id: productlist.length + 1 },
    ]);
  };
  }
  
   
 

  const AddToCategoryHandler = (categoris) => {
    if(!categoris)  {
      NotificationManager.error('Error message', 'Please enter New Category!', 5000)
      // NotificationManager.warning('Warning message', 'Please enter New Category', 3000)
    }
    else{
    setAddCategory([...addcategory, categoris]);
    console.log(categoris);
    NotificationManager.success(' Add New Category', 'Sucsses');
    }
  };
  
  return (
    <div>
      <Navbar totalItem={productlist.filter((p) => p.id > 0).length} />
      <div className={styles.container}>
      <div className={styles.addProduct}>
      <BookForm addHandler={addHandler} addcategory={addcategory} />
     <AddCategory categoryHandler={AddToCategoryHandler} />
      </div>
     <div  className={styles.productlist}>
     <BookList productlist={productlist} />
     </div>
      </div>
     
     
      <NotificationContainer/>
    </div>
  );
};

export default Home;
