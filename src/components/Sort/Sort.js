const Sort = ({sort,onSort}) => {
    return ( 
        <div>
            <label>Sort</label>
            <select  className='rounded-md mt-2 ml-5 w-1/3 text-slate-800 text-xs h-2/4' onChange={onSort}  value={sort} >
<option >latest</option>
<option>earlist</option>
  
   
    </select>
        </div>

     );
}
 
export default Sort;