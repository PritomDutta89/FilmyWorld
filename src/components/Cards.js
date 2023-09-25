import { getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import ReactStars from "react-stars";
import { moviesRef } from "../firebase/firebase";
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); //for loading screen

  // fetch all data
  useEffect(() => {
    async function getData() {
      setLoading(true);
      setData([]); //empty previous state
      const _data = await getDocs(moviesRef); //fetching all data from firestore collection like GET method
      console.log("data:", _data);
      _data.forEach((doc) => {
        // console.log("item: ", item._document.data.value);
        setData((prv) => [...prv, { ...doc.data(), id: doc.id }]); //use previous state and item.data() return a object, means by previous state store previous element, and also add new element
      });
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="flex flex-wrap md:justify-between justify-center px-3 mt-2">
      {loading ? (
        <div className="w-full flex justify-center items-center h-96">
          <ThreeDots height={40} color="white" />
        </div>
      ) : (
        data.map((element, index) => {
          return (
            <Link to={`/detail/${element.id}`}>
              <div
                key={index}
                className="card font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer mt-6 transition-all duration-500"
              >
                <img className="h-60 md:h-72 w-90 md:w-1" src={element.image} />
                <h1>{element.title}</h1>
                <h1 className="flex items-center">
                  <span className="text-gray-500 mr-1">Rating:</span>
                  <ReactStars
                    size={20}
                    half={true}
                    value={element.rating / element.rated}
                    edit={false}
                  />
                </h1>
                <h1>
                  <span className="text-gray-500">Year:</span> {element.year}
                </h1>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Cards;
