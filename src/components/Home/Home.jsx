import React from "react";
import img1 from "../../assets/Selection (3).png";
import img2 from "../../assets/Selection (4).png";
import img3 from "../../assets/Selection (5).png";
import artist1 from "../../assets/artist1.png";
import artist2 from "../../assets/artist2.png";
import artist3 from "../../assets/artist3.png";
import artist4 from "../../assets/artist4.png";
import artist5 from "../../assets/artist1.png";
import new1 from "../../assets/new1.png";
import new2 from "../../assets/new2.png";
import new3 from "../../assets/new3.png";
import new4 from "../../assets/new4.png";
import CustomSlider from "../Carousel/Carousel";
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer'
import "./Home.css";
import TrendingFeature from "../TrendingFeature/TrendingFeature";

export default function Home() {
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
  ];

  const artists = [
    {
      name: "Anya Sharma",
      title: "Master of Surreal",
      image: artist1,
    },
    {
      name: "Javier Flores",
      title: "Vibrant Expressionist",
      image: artist2,
    },
    {
      name: "Lena Petrova",
      title: "Sculptor of Serenity",
      image: artist3,
    },
    {
      name: "Kairos Bloom",
      title: "Digital Dream Weaver",
      image: artist4,
    },
    {
      name: "Reuben 'Rook' Davies",
      title: "Urban Art Pioneer",
      image: artist5,
    },
  ];
  const new_arrival = [
    {
      title: "Silent Contemplation",
      artist: "Marcus Thorne",
      image: new1,
    },
    {
      title: "Urban Symphony",
      artist: "Chloe Sterling",
      image: new2,
    },
    {
      title: "Quantum Metropolis",
      artist: "Sarah Chen",
      image: new3,
    },
    {
      title: "Still Life with Apples",
      artist: "Paul Cézanne",
      image: new4,
    },
  ];
  return (
    <>
      <Navbar />
      <div className="container w-3/4 mx-auto mt-16 py-4">
        <div className="header rounded-xl p-2 h-[480px] flex flex-col justify-end">
          <div className=" px-8 my-3">
            <h1 className="text-3xl font-extrabold text-white mb-2">
              Echoes of Eternity
            </h1>
            <p className="text-xl text-white mb-5"> Eleanor Vance </p>
            <a href="#" className="art_work  px-4 py-2 my-2">
              View Artwork
            </a>
          </div>
        </div>
        <CustomSlider />

        <TrendingFeature />

        <section className="w-11/12 mx-auto my-12">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold !text-gray-900">
              Trending Artworks
            </h2>
            <a
              href="#"
              className=" text-sm font-medium flex items-center gap-1 !text-gray-400"
            >
              View All →
            </a>
          </div>

          {/* Artworks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {artworks.map((art, index) => (
              <div
                key={index}
                className="bg-white  rounded-xl  hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-gray-900 font-semibold text-sm">
                    {art.title}
                  </h3>
                  <p className="text-gray-500 text-xs">{art.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="w-11/12 mx-auto my-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold !text-gray-900">
              Artists in Focus
            </h2>
            <a
              href="#"
              className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center gap-1 !text-gray-400"
            >
              View All Artists →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="bg-white shadow-sm hover:shadow-md rounded-2xl p-5 text-center transition-all duration-200"
              >
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover mb-3"
                />
                <h3 className="text-gray-900 font-medium text-sm">
                  {artist.name}
                </h3>
                <p className="text-gray-500 text-xs">{artist.title}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="w-11/12 mx-auto my-12">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold !text-gray-900">New Arrivals</h2>
            <a
              href="#"
              className=" text-sm font-medium flex items-center gap-1 !text-gray-400"
            >
              See Latest →
            </a>
          </div>

          {/* Galleries Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {new_arrival.map((art, index) => (
              <div
                key={index}
                className="bg-white  rounded-xl  hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-gray-900 font-semibold text-sm">
                    {art.title}
                  </h3>
                  <p className="text-gray-500 text-xs">{art.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
