import styles from "./BookList.module.css"
const BookList = ({productlist}) => {
    return (<div>
       {productlist.map((product)=>{
        return <div className={styles.products}>
        <div> <label> BookName:</label><p className={styles.product}> {product.title} </p> </div>
        <div> <label> Category:</label><p className={styles.product}>{product.category}</p> </div>
         {/* <label> Id:</label>  <p className={styles.product}>{product.id}</p>  */}
            </div>}
        )}
    </div>  );
}
 
export default BookList;