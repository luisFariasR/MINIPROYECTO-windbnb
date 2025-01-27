
export default function Header() {
    return(
        <div className="flex flex-col md:flex-row md:justify-between py-2 ">
            <div className="h-16 items-center">
            <img src="./src/assets/logowind.svg" alt="windbnb-logo" className="h-6" />
            </div>
            
      <div className=" border-[3px] rounded-3xl shadow flex  ">
        <div className="location border-[2px] flex flex-col px-5 py-2 justify-center flex-1 ">
          
          <input
            className="focus:outline-none  "
            type="text"
            placeholder="Add Location" 
             
          />  
        </div>
        <div className=" guests border-[2px] flex flex-col px-5 py-2  justify-center flex-1">
         
          <input
            className="focus:outline-none justify-center "
            type="text"
            placeholder="Add guests"
          />
        </div>
        <div className="flex justify-center w-[6rem]">
          <div className="btn py-3 flex justify-center">
          <button className="flex rounded-2xl ">
            <img src="./src/assets/search_icon.svg" alt="" />
            
          </button>
          </div>
        </div>
      </div>

        </div>
    )
    
}
/* 
<div className=""> 
 <label htmlFor="">LOCATION</label>  
<input type="text" placeholder="Add Location" />
</div>
<div>


</div> */