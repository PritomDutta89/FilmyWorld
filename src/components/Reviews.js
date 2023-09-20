import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { reviewsRef, db } from "../firebase/firebase";
import {
  addDoc,
  doc,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { TailSpin, ThreeDots } from "react-loader-spinner"; //for loading screen
import swal from "sweetalert";

const Reviews = ({ id, prevRating, userRated }) => {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [form, setForm] = useState("");
  const [data, setData] = useState([]);

  //add review in DB/firestore
  const sendReview = async () => {
    setLoading(true);
    try {
      await addDoc(reviewsRef, {
        movieid: id,
        name: "pritom",
        rating: rating,
        thought: form,
        timestamp: new Date().getTime(),
      });

      //Here we update rating about specific movies
      const ref = doc(db, "movies", id); //get or point specific id
      await updateDoc(ref, {
        rating: prevRating + rating,
        rated: userRated + 1,
      });

      //set rating 0
      setRating(0);

      setForm(""); //erse the input form

      //For notification
      swal({
        title: "Review Sent", 
        icon: "success",
        buttons: false,
        timer: 3000,
      });

      // getData(); //cal get method to show current sent data 
    } catch (err) {
      //For notification
      swal({
        title: err.message,
        icon: "error",
        buttons: false,
        timer: 3000,
      });
    }
    setLoading(false);
  };

  //here get reviews and show all of them
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setReviewsLoading(true);
    let quer = query(reviewsRef, where("movieid", "==", id)); //write a query only fetch those data which id is equal to current movieid
    const querySnapShot = await getDocs(quer); //here we get so many data

    querySnapShot.forEach((item) => {
      setData((prev) => [...prev, item.data()]);
    });

    setReviewsLoading(false);
  }

  return (
    <div className="mt-4 border-t-2 border-gray-700 w-full">
      <ReactStars
        size={30}
        half={true}
        value={rating}
        onChange={(rate) => setRating(rate)}
      />
      <input
        className="w-full p-2 outline-none header"
        placeholder="Share your thoughts..."
        value={form}
        onChange={(e) => setForm(e.target.value)}
      />
      <button
        className="bg-green-600 w-full p-2 flex justify-center"
        onClick={sendReview}
      >
        {loading ? <TailSpin height={20} color="white" /> : "Share"}
      </button>

      {reviewsLoading ? (
        <div className="mt-8 flex justify-center">
          <ThreeDots height={10} color="white" />
        </div>
      ) : (
        <div className="mt-4">
          {data.map((e, i) => {
            return (
              <div className="p-2 w-full mt-2 border-b border-gray-800 header bg-opacity-50 " key={i}>
                <div className="flex items-center">
                  <p className="text-blue-500">{e.name}</p>
                  <p className="ml-3 text-xs">
                    ({new Date(e.timestamp).toLocaleString()})
                  </p>
                </div>
                <ReactStars
                  size={15}
                  half={true}
                  value={e.rating}
                  edit={false}
                />
                <p>{e.thought}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Reviews;
