import React, { useEffect, useState } from "react";
import "./TrendingFeature.css";
import img1 from "../../assets/Selection (3).png";
import img2 from "../../assets/Selection (4).png";
import img3 from "../../assets/Selection (5).png";
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'

export default function TrendingFeature() {
  const artworks = [
    {
      title: "Silent Contemplation",
      artist: "Marcus Thorne",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    },
    {
      title: "Urban Symphony",
      artist: "Chloe Sterling",
      image: img1,
    },
    {
      title: "Quantum Metropolis",
      artist: "Sarah Chen",
      image: img2,
    },
    {
      title: "Still Life with Apples",
      artist: "Paul Cézanne",
      image: img3,
    },
    {
      title: "Still Life with Apples",
      artist: "Paul Cézanne",
      image: img4,
    },
    {
      title: "Still Life with Apples",
      artist: "Paul Cézanne",
      image: img5,
    },
  ];
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setTime({ hours, minutes });
    };

    updateTime(); 
    const interval = setInterval(updateTime, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <div className="trending-feature flex flex-col lg:flex-row w-11/12 mx-auto my-10 gap-6">
        <div className="featured w-full lg:w-[30%]">
          <div className="w-full rounded-xl p-4 shadow-sm costum">
            <h1 className="text-2xl font-extrabold flex items-center gap-2">
              <i className="fa-solid fa-brush"></i> Featured
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 my-4">
            <div className="rounded-xl h-60 md:h-72 costum"></div>
            <div className="rounded-xl h-60 md:h-72 costum"></div>
            <div className="bg-black rounded-xl h-60 md:h-50 text-white text-center flex flex-col justify-center">
              <div>
                <h2 className="!text-white text-2xl">Limited Time</h2>
                <p>Hurry, ends soon!</p>
              </div>
              <div className="time mt-3 flex items-center justify-center">
                <span className="inline-block h-15 w-15 rounded-2xl mx-2 bg-white text-black text-2xl font-bold p-4">
                  {time.hours}
                </span>
                <span className="inline-block text-3xl align-middle ">:</span>
                <span className="inline-block h-15 w-15 rounded-2xl mx-2 bg-white text-black text-2xl font-bold p-4">
                  {time.minutes}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="trending w-full lg:w-[70%]">
          <div className="rounded-xl p-4 shadow-sm costum">
            <h1 className="text-2xl font-extrabold flex items-center gap-2">
              <i className="fa-solid fa-star"></i> Trending
            </h1>
          </div>

          <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 trend-grid">
            {artworks.map((art, index) => (
              <div
                key={index}
                className="costum !bg-white  rounded-xl overflow-hidden trend-item pb-2 cursor-pointer   text-center"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-40 object-cover rounded-t-lg mb-3"
                />
                <h3 className="text-lg !bg-white font-semibold">{art.title}</h3>
                <p className="text-sm !bg-white text-gray-600">{art.artist}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="rounded-xl p-4 shadow-sm">
              <h1 className="text-2xl font-extrabold flex items-center gap-2">
                <i className="fa-solid fa-paintbrush"></i> Popular Categories
              </h1>
            </div>

            <div className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="costum rounded-xl h-48 sm:h-56 md:h-64 flex items-center justify-center text-white text-xl font-bold">
                Portrait Art
              </div>
              <div className="costum rounded-xl h-48 sm:h-56 md:h-64 flex items-center justify-center text-white text-xl font-bold">
                Abstract Designs
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
