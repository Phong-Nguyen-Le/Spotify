import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./MyPlayList.module.scss";
import { Songs } from "../../Context";

let cx = classNames.bind(styles);

function MyPlayList() {
    // Show/unShown Playlist
    const [active, setActive] = useState("");
    const { playList, handleSetSong, handleDeleteItemfromList } = useContext(Songs);

    console.log(playList)
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
                <p>Playlist</p>
                <i class="fa-regular fa-rectangle-list"></i>
            </div>
            <div className={cx("container", active)}>
                <header className={cx("header")}>
                    <p>Danh sách đã chọn</p>
                    <i onClick={handleChange} class="fa-solid fa-xmark"></i>
                </header>
                <div className={cx("body")}>
                    <ul>
                        {playList.map((song, index) => {
                            return (
                                <li className={cx("item")} key={song.id}>
                                    <p>{index+1}</p>
                                    <div onClick={() =>{handleSetSong(song.id, `playlist`)}}>{song.name}</div>
                                    <i onClick={() => handleDeleteItemfromList(song.id)} class="fa-solid fa-xmark"></i>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MyPlayList;
