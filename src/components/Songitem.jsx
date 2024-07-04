import React, { useContext } from "react";
import { Playercontext } from "../context/Playercontext";

const Songitem = ({ name, image, desc, id }) => {
  const { playwithid } = useContext(Playercontext);

  return (
    <div
      onClick={() => playwithid(id)}
      className="min-w-[219px] p-2 px-3 rounded-none cursor-pointer hover:bg-[#ffffff26]"
    >
      <img src={image} alt="" />
      <p className="font-bold mt-2 mb-1 text-slate-200">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default Songitem;