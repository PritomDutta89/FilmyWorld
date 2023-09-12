import React, { useState } from "react";
import ReactStars from "react-stars";

const Cards = () => {
  const [data, setData] = useState([
    {
      name: "Doctor Strange",
      year: 2018,
      rating: 4,
      img: "https://www.slashfilm.com/wp/wp-content/images/bestposters2016-doctorstrange-shipper.jpg",
    },
    {
      name: "Doctor Strange",
      year: 2018,
      rating: 4,
      img: "https://www.slashfilm.com/wp/wp-content/images/bestposters2016-doctorstrange-shipper.jpg",
    },
    {
      name: "Doctor Strange",
      year: 2018,
      rating: 5,
      img: "https://www.slashfilm.com/wp/wp-content/images/bestposters2016-doctorstrange-shipper.jpg",
    },
    {
      name: "Doctor Strange",
      year: 2018,
      rating: 3,
      img: "https://www.slashfilm.com/wp/wp-content/images/bestposters2016-doctorstrange-shipper.jpg",
    },
    {
      name: "Doctor Strange",
      year: 2018,
      rating: 5,
      img: "https://www.slashfilm.com/wp/wp-content/images/bestposters2016-doctorstrange-shipper.jpg",
    },
    {
      name: "Doctor Strange",
      year: 2018,
      rating: 5,
      img: "https://www.slashfilm.com/wp/wp-content/images/bestposters2016-doctorstrange-shipper.jpg",
    },
    {
      name: "Doctor Strange",
      year: 2018,
      rating: 5,
      img: "https://www.slashfilm.com/wp/wp-content/images/bestposters2016-doctorstrange-shipper.jpg",
    },
    {
      name: "Doctor Strange",
      year: 2018,
      rating: 5,
      img: "https://www.slashfilm.com/wp/wp-content/images/bestposters2016-doctorstrange-shipper.jpg",
    },
  ]);

  return (
    <div className="flex flex-wrap justify-between p-3 mt-2">
      {data.map((element, index) => {
        return (
          <div
            key={index}
            className="card font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer mt-6 transition-all duration-500"
          >
            <img className="h-72" src={element.img} />
            <h1>
              <span className="text-gray-500">Name:</span> {element.name}
            </h1>
            <h1 className="flex items-center">
              <span className="text-gray-500 mr-1">Rating:</span> 
              <ReactStars
                size={20}
                half={true}
                value={element.rating}
                edit={false}
              />
            </h1>
            <h1>
              <span className="text-gray-500">Year:</span> {element.year}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
