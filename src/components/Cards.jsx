export default function Cards() {
  return (
    /* agregar absolute con un escuchador de eventos */
    <div className="cardsContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  inset-0 -z-10 px-8 ">
      
      <div className="card  bg-white  rounded-lg shadow">
        <div className="image ">
          <img
            src="https://media.staticontent.com/media/pictures/89c63be3-373a-4a52-b2c9-bd04569255fa/500x500"
            alt="Card Image"
            className="rounded-[4rem] w-full"
          />
        </div>
        <div className="flex h-[6rem]">
          <div className="p-6">
            <div className="flex gap-4">
              <div className="border-[2px] border-black rounded-3xl py-1 px-3">
                <h4>SUPERHOST</h4>
              </div>
              <p className="text-gray-600">Lorem ipsum amet . 3 beds </p>
            </div>
            <div className="flex py-1">
              <h2 className="text-lg font-semibold text-gray-800 py-2">
                Título de la Tarjeta
              </h2>
            </div>
          </div>
          <div className="flex  py-6 ">
            <div className="bg-red-600 h-5 rounded-md ">
              <img src="./src/assets/starRate.svg.svg" alt="" className="" />
            </div>
            <div className="px-2">
              <span className="">4.5</span>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
