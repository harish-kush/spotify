import { React, useContext } from "react";
import { assets, songsData } from "../assets/assets/assets";
import { Playercontext } from "../context/Playercontext";
const Player = () => {
  const { seekbar, seekbg, play, pause, playstatus, track, time,previous,next, loop, seekSong } =
    useContext(Playercontext);

  return (
    <div>
      <div className="h-[10%]  flex justify-between items-center text-white px-4  ">
        <div className="hidden lg:flex items-center  gap-4">
          <img className="w-12" src={track.image} alt="" />
          <div>
            <p>{track.name}</p>
            <p>{track.desc.slice(0, 12)}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 m-auto">
          <div className="flex gap-4 pt-1">
            <img
              className="w-4 cursor-pointer"
              src={assets.shuffle_icon}
              alt=""
            />
            <img onClick={()=>previous(track.id)} className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
            {playstatus ? (
              <img
                onClick={pause}
                className="w-4 cursor-pointer"
                src={assets.pause_icon}
                alt=""
              />
            ) : (
              <img
                onClick={play}
                className="w-4 cursor-pointer"
                src={assets.play_icon}
                alt=""
              />
            )}

            <img onClick={()=>next(track.id)} className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
            <img onClick={()=>loop(track.id)} className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
          </div>
          <div className="flex items-center gap-5">
            <p>{time.currentTime.minute}:{time.currentTime.second}</p>
            <div
              ref={seekbg} onClick={seekSong}
              className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
            >
              <hr
                ref={seekbar}
                className="h-1 border-none w-0 bg-green-400 rounded-full"
              />
            </div>
            <p>{time.totalTime.minute}:{time.totalTime.minute}</p>
          </div>
          <div className="hidden lg:flex items-center gap-2 opacity-75">
            <img className="w-4" src={assets.plays_icon} alt="" />
            <img className="w-4" src={assets.mic_icon} alt="" />
            <img className="w-4" src={assets.queue_icon} alt="" />
            <img className="w-4" src={assets.speaker_icon} alt="" />
            <img className="w-4" src={assets.volume_icon} alt="" />
            <div className="w-20 bg-slate-50 h-1 rounded ">
              <hr className="h-1 border-none w-4 bg-green-400 rounded-full" />
            </div>
            <img className="w-4" src={assets.mini_player_icon} alt="" />
            <img className="w-4" src={assets.zoom_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
