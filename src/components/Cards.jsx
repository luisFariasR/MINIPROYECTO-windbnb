const base = [
  {
    city: "Helsinki",
    country: "Finland",
    superHost: false,
    title: "Stylist apartment in center of the city",
    rating: 4.4,
    maxGuests: 3,
    type: "Entire apartment",
    beds: 2,
    photo:
      "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80",
  },
  {
    city: "Turku",
    country: "Finland",
    superHost: false,
    title: "Nice apartment in center of Helsinki",
    rating: 4.2,
    maxGuests: 5,
    type: "Entire apartment",
    beds: 3,
    photo:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  },
  {
    city: "Helsinki",
    country: "Finland",
    superHost: true,
    title: "Arty interior in 1900 wooden house",
    rating: 4.5,
    maxGuests: 10,
    type: "Entire house",
    beds: 6,
    photo:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  },
  {
    city: "Helsinki",
    country: "Finland",
    superHost: false,
    title: "Stylist apartment in center of the city",
    rating: 4.4,
    maxGuests: 3,
    type: "Entire apartment",
    beds: 2,
    photo:
    "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=2253&q=80",
  },
  {
    city: "Turku",
    country: "Finland",
    superHost: true,
    title: "Villa Aurora guest-house",
    rating: 4.75,
    maxGuests: 9,
    type: "Entire house",
    beds: null,
    photo:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80",
  },
  {
    city: "Vaasa",
    country: "Finland",
    superHost: true,
    title: "A cosy family house",
    rating: 4.95,
    maxGuests: 6,
    type: "Entire house",
    beds: null,
    photo:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  },
  {
    city: "Vaasa",
    country: "Finland",
    superHost: false,
    title: "Lovely Studio near Railway Station",
    rating: 4.68,
    maxGuests: 2,
    type: "Private room",
    beds: null,
    photo:
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2591&q=80",
  },
  {
    city: "Oulu",
    country: "Finland",
    superHost: false,
    title: "Peaceful little home in city center",
    rating: 4.12,
    maxGuests: 6,
    type: "Entire house",
    beds: 3,
    photo:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  },
  {
    city: "Oulu",
    country: "Finland",
    superHost: false,
    title: "Beautiful new studio apartment nearby the center",
    rating: 4.49,
    maxGuests: 2,
    type: "Entire apartment",
    beds: 1,
    photo:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80",
  },
  {
    city: "Oulu",
    country: "Finland",
    superHost: true,
    title: "Cozy woodhouse flat with wooden sauna",
    rating: 4.38,
    maxGuests: 4,
    type: "Entire house",
    beds: null,
    photo:
      "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=930&q=80",
  },
  {
    city: "Vaasa",
    country: "Finland",
    superHost: false,
    title: "Brand new studio apartment near the harbour",
    rating: 4.89,
    maxGuests: 6,
    type: "Entire apartment",
    beds: 3,
    photo:
      "https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
  },
  {
    city: "Helsinki",
    country: "Finland",
    superHost: false,
    title: "Beautiful and comfortable old wooden house",
    rating: 4.63,
    maxGuests: 10,
    type: "Entire house",
    beds: null,
    photo:
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
  },
  {
    city: "Turku",
    country: "Finland",
    superHost: false,
    title: "Turku Nordic Home near city center",
    rating: 4.24,
    maxGuests: 5,
    type: "Entire apartment",
    beds: 3,
    photo:
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=2253&q=80",
  },
  {
    city: "Turku",
    country: "Finland",
    superHost: true,
    title: "Nice 2 room apartment close to everything",
    rating: 4.34,
    maxGuests: 6,
    type: "Entire apartment",
    beds: 3,
    photo:
      "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80",
  },
];

export default function Cards() {
  return (
    /* agregar absolute con un escuchador de eventos */
    <div className="cardsContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  inset-0 -z-10 px-8 ">
      {base.map((item, index) => (
        <div key={index} className="card  bg-white  rounded-lg shadow">
          <div className="image  ">
            <img
              src={item.photo}
              alt={item.title}
              className="rounded-[4rem] w-full"
            />
          </div>
          <div className="flex h-[6rem] justify-between ">
            <div className="p-6">
              <div className="flex gap-4">
                {item.superHost && (
                  <div className="border-[2px] border-black rounded-3xl py-1 px-3">
                    <h4>SUPERHOST</h4>
                  </div>
                )}
                <p className="text-gray-600">
                  {item.type}
                  {item.beds && ` · ${item.beds} beds`}
                </p>
              </div>
              <div className="flex py-1">
                <h2 className="text-lg font-semibold text-gray-800 py-2">
                  {item.title}
                </h2>
              </div>
            </div>
            <div className="flex  py-6 ">
              <div className="bg-red-600 h-6 rounded-md  ">
                <img src="./src/assets/starRate.svg.svg" alt="" className="" />
              </div>
              <div className="px-2">
                <span className="">{item.rating}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
