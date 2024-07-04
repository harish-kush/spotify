import { Children, createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets/assets";

export const Playercontext = createContext();

const PlayerContextProvider = (props) => {

   const audioRef = useRef()
   const seekbg = useRef()
   const seekbar = useRef()

   const [track, settrack] = useState(songsData[0])
   const [playstatus, setplaystatus] = useState(false)
   const [time, settime] = useState({
    currentTime:{
        second:0,
        minute:0
    },
    totalTime:{
        second:0,
        minute:0
    }
   })
   const play = () => {
      audioRef.current.play()
      setplaystatus(true)
   }
   const pause = () =>{
    audioRef.current.pause()
    setplaystatus(false)
   }

   const playwithid = async (id) => {
    await settrack(songsData[id])
    await audioRef.current.play()
    setplaystatus(true)
   }

   const previous = async(id) => {
    if(track.id>0) {
      await  settrack(songsData[track.id-1])
       await audioRef.current.play()
        setplaystatus(true)
    }
   }
   const next = async(id) => {
    if(track.id<songsData.length-1) {
      await  settrack(songsData[track.id+1])
       await audioRef.current.play()
        setplaystatus(true)
    }
   }
   const loop = async(id) => {
    
      await  settrack(songsData[track.id])
       await audioRef.current.play()
        setplaystatus(true)
       
   }

   const seekSong = async(e) => {
    audioRef.current.currentTime = ((e.nativeEvent.offsetX/seekbg.current.offsetWidth)*audioRef.current.duration)
    
  
 }


   useEffect(() => {
     
   setTimeout(() => {
    audioRef.current.ontimeupdate = () => {

     seekbar.current.style.width = (Math.floor((audioRef.current.currentTime/audioRef.current.duration)*100)+"%")

        settime({
            currentTime:{
                second:Math.floor(audioRef.current.currentTime%60),
                minute:Math.floor(audioRef.current.currentTime/60)
            },
            totalTime:{
                second:Math.floor(audioRef.current.duration%60),
                minute:Math.floor(audioRef.current.duration/60)
            }
        })
    }
   }, 1000);
    
   }, [audioRef])
   

 const contextvalue = {
      audioRef,
      seekbg,
      seekbar,
      track,settrack,
      time,settime,
      playstatus,setplaystatus,
      play,pause,
      playwithid,
      previous,next,loop,
      seekSong
 }

  return (
    <Playercontext.Provider value={contextvalue}>{props.children}</Playercontext.Provider>
  )
};
export default PlayerContextProvider;
