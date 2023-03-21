import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./MyPlayList.module.scss";
import { Songs } from "../../Context";
import { flushSync } from "react-dom";

let cx = classNames.bind(styles);

function MyPlayList() {
    // Show/unShown Playlist
    const [active, setActive] = useState("");
   
    const { playList, handleSetSong, handleDeleteItemfromList } = useContext(Songs);
    const handleChange = (e) => {
        // e.preventDefault();
        if (active == "active") {
            setActive("");
        } else {
            setActive("active");
        }
    };
    return (
        <>
            <div onClick={handleChange} className={cx("list-btn")}>
                <i class="fa-regular fa-rectangle-list"></i>
                <p>Playlist</p>  
                <span>{playList.length}</span>             
            </div>
            <div className={cx("container", active)}>
                <header className={cx("header")}>
                   
                    <p>Selected list</p>
                    <span>{playList.length}</span>
                    <i onClick={handleChange}>Close</i>
                </header>
                <div className={cx("body")}>
                    <ul>  
                        { (!playList.length) ? (<li className={cx("item0")}>No songs have been added yet</li>) : (playList.map((song, index) => {
                                    return (
                                        <li className={cx("item")} key={song.id}>
                                            <span>{index+1}</span>
                                            <img src={song.links.images[0].url}></img>
                                            <div onClick={() =>{handleSetSong(song.id, `playlist`)}}>
                                                 <p>{song.name}</p>
                                                 <span>{song.author}</span>
                                            </div>
                                            <i onClick={() => handleDeleteItemfromList(song.id)} class="fa-solid fa-xmark"></i>
                                        </li>
                                    );
                                }
                            ))   
                        } 
                    </ul>       
                </div>
            </div>
        </>
    );
}

export default MyPlayList;
