import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
import gallery1 from "../../assets/gallery1.png";
import gallery2 from "../../assets/gallery2.png";
import gallery3 from "../../assets/gallery3.png";
import gallery4 from "../../assets/gallery4.png";

export default function CustomSlider() {
  const [paused, setPaused] = useState(false);

  const artworks = [
    { title: "Silent Contemplation", artist: "Marcus Thorne", image: gallery1 },
    { title: "Silent Contemplation", artist: "Marcus Thorne", image: gallery2 },
    { title: "Silent Contemplation", artist: "Marcus Thorne", image: gallery3 },
    { title: "Silent Contemplation", artist: "Marcus Thorne", image: gallery4 },
  ];

  const responsiveOptions = [
    { breakpoint: "1400px", numVisible: 4, numScroll: 1 },
    { breakpoint: "991px", numVisible: 2, numScroll: 1 },
    { breakpoint: "575px", numVisible: 1, numScroll: 1 },
  ];

  const artworkTemplate = (art) => {
    return (
      <div className="bg-white rounded-xl hover:shadow-lg transition overflow-hidden m-2">
        <img
          src={art.image}
          alt={art.title}
          className="w-full object-cover"
          style={{
            height: "192px", 
            borderRadius: "12px 12px 0 0",
          }}
        />
        <div className="p-3">
          <h3 className="text-gray-900 font-semibold text-sm">{art.title}</h3>
          <p className="text-gray-500 text-xs">{art.artist}</p>
        </div>
      </div>
    );
  };

  return (
    <section
      className="w-11/12 mx-auto my-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold !text-gray-900">
          Curated Galleries
        </h2>
      </div>

      {/* Carousel */}
      <Carousel
        value={artworks}
        numVisible={4}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        circular
        autoplayInterval={paused ? null : 2000}
        itemTemplate={artworkTemplate}
        className="cursor-pointer"
      />
    </section>
  );
}
