export default function Modal() {
  return (
    <div className="modal flex flex-col hidden px-6 lg:row lg:py-20 row-auto md:px-20 lg:h-[80%] fixed z-index bg-white w-full">
      <div className="edit 1de3 py-6 flex justify-between md:block lg:hidden ">
        <span>Edit your search</span> <button>X</button>
      </div>

      <div className="contenedorDe3  2de3 border-[3px] rounded-2xl shadow-xl flex flex-col lg:flex-row ">
        <div className="location border-[2px] flex flex-col px-5 py-2 flex-1">
          <span>LOCATION</span>
          <input
            className="focus:outline-none "
            type="text"
            placeholder="Add Location" 
          />  
        </div>
        <div className=" guests border-[2px] flex flex-col px-5 py-2 flex-1">
          <span>GUESTS</span>{" "}
          <input
            className="focus:outline-none "
            type="text"
            placeholder="Add guests"
          />
        </div>
        <div className="hidden lg:flex justify-center flex-1">
          <div className="btn py-3 flex justify-center">
          <button className="flex bg-red-600 rounded-2xl w-[8rem]">
            <img src="./src/assets/search_icon.svg" alt="" />
            <span className="text-white">search</span>
          </button>
          </div>
        </div>
      </div>
      <div className="botonesadd 3de3 flex">
        <div className="flex-1 hidden lg:block"></div>
        <div className="alignmentButtons flex-1 lg:px-[6rem] ">
      <div className="flex flex-col py-10 ">
        <span>Adults</span>
        <span className="text-gray-400 py-3">Ages 13 or Above</span>
        <div className="flex justify-between w-[8.5rem]">
          <button className="border border-black bg-slate-200 px-2 rounded-md">
            -
          </button>
          <span>0</span>
          <button className="border border-black bg-slate-200 px-2 rounded-md">
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col ">
        <span>Children</span>
        <span className="text-gray-400 py-3">Ages 13 or Above</span>
        <div className="flex justify-between w-[8.5rem]">
          <button className="border border-black bg-slate-200 px-2 rounded-md">
            -
          </button>
          <span>0</span>
          <button className="border border-black bg-slate-200 px-2 rounded-md">
            +
          </button>
        </div>
      </div>
      </div>
      <div className="flex-1"></div>
      </div>

      <div className="   md:block lg:hidden py-16 flex justify-center">
        <button className="flex bg-red-600 rounded-2xl w-[8rem]">
          <img src="./src/assets/search_icon.svg" alt="" />
          <span className="text-white">search</span>
        </button>
      </div>
    </div>
  );
}
