import React, { createRef, useContext, useEffect } from "react";
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { Songs } from "../../../Context";

export default function Playing() {
    
    let player = createRef()
   
    const {song, handleSetSong} = useContext(Songs)
    const handleClickNext = () => {
        handleSetSong(song.id+1)
    }

    useEffect(()=> {
        console.log(player.current)

    })

    const handleClickPrevious = () => {
        handleSetSong(song.id-1)
    }
    return (
        <div className='col-span-6'>    
            <AudioPlayer 
            src={song.url} 
            className="player-music" 
            layout="stacked-reverse" 
            showSkipControls={true} 
            showJumpControls={false}
            onClickNext={handleClickNext}
            onClickPrevious={handleClickPrevious}
            onEnded={handleClickNext}
            ref={player}
            />
        </div>
    )
}