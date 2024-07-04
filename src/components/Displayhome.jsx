import React from "react";
import { albumsData } from "../assets/assets/assets";
import { songsData } from "../assets/assets/assets";
import Navbar from "./Navbar";
import Albumitem from "./Albumitem";
import Songitem from "./Songitem";

const Displayhome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl text-slate-200">
          Featured Charts
        </h1>
        <div className="my-5 font-bold text-2xl">
          <div className="flex overflow-auto">
            {albumsData.map((item, index) => (
              <Albumitem
                key={index}
                name={item.name}
                image={item.image}
                desc={item.desc}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl text-slate-200">
          Today's Biggest Hit
        </h1>
        <div className="my-5 font-bold text-2xl">
          <div className="flex overflow-auto">
            {songsData.map((item, index) => (
              <Songitem
                key={index}
                name={item.name}
                image={item.image}
                desc={item.desc}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Displayhome;
