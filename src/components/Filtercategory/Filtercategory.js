const Filtercategory = ({addcategory, filtercategory,onfilter}) => {
    return (
        <div>
            <label>filter</label>
            <select  className='rounded-md mt-2 ml-5 w-1/3 text-slate-800 text-xs h-2/4' onChange={onfilter}  value={filtercategory} >
<option value="">All</option>
  
    {addcategory.map((p)=>{
return <option key={p.id} value={p.id} >{p.category}</option>
    })}
    </select>
        </div>
      );
}
 
export default Filtercategory;