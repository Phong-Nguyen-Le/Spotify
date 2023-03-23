import React, { useContext } from "react";
import { Songs } from "../Context"

export default function DetailSong() {
    const {song} = useContext(Songs)
    return(
       
        <div className='col-span-1 pt-5 pb-5 text-center flex flex-col justify-evenly max-lg:hidden'>
            {song && (
                <>   
                <h2 className='text-cyan-400 font-semibold font'>Now playing</h2>
                <h2 className='text-gray-300 text-2xl max-xl:text-xl'>{song.name}</h2>
                <div className="w-[70%] max-w-[240px] mr-auto ml-auto">
                    <img className="rounded-xl" src={song.links.images[0].url} alt="avatar"></img>
                </div>
                <div className="flex justify-center items-center mt-4">
                    <img className=" w-[20%]  max-w-[70px] rounded-full" src={song.links.images[1].url} alt="avatar"></img>
                    <span className=" text-white ml-5 text-xl max-xl:text-lg">{song.author}</span>
                </div>
                </>
            )}
        </div>
    )
}