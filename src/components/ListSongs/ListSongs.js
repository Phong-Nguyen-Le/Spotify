import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../../Context";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./ListSongs.module.scss";

let cx = classNames.bind(styles);

export default function ListSongs() {
    const { DataSongs, handleSetSong, song, handleAddList } = useContext(Songs);
    const [idSong, setIdSong] = useState(0);
    
   
    const handlePlaysong = (idSong, placePara) => {
        handleSetSong(idSong, placePara);
    };
    useEffect(() => {
        setIdSong(song.id); 
    }, [song]);

    return (
        <>
            <div className={cx("wrapper")}>
                <table className=" table-auto w-full">
                    <thead className="text-white h-12 max-md:text-sm">
                        <tr>
                            <th className="w-[15%]">#</th>
                            <th className="w-[70%] text-left">NAME OF THE SONG</th>
                            <th className="max-md:hidden" >AUTHOR</th>
                            <th className="w-[15%]">#</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {DataSongs.map((song, index) => (
                            <tr
                                key={index}
                                className={`h-12 xl:h-11 text-gray-200 max-md:text-xs hover:text-white ${
                                    idSong === song.id &&
                                    "text-red-600 bg-gray-400 bg-opacity-50"
                                }`}
                            >
                                <td className="text-center">{index + 1}</td>
                                <td className="max-md:text-sm max-md:font-medium" onClick={() => handlePlaysong(song.id,"home")}>
                                    {song.name}
                                    <p className="md:hidden max-md:text-xs max-md:font-thin">{song.author}</p>
                                </td>
                                <td className="text-center max-md:hidden">{song.author}</td>
                                <td className="text-center">
                                    <Tippy
                                        interactive
                                        trigger="click"
                                        placement="left-start"
                                        render={(attrs) => (
                                            <div
                                                className="box"
                                                tabIndex="-1"
                                                {...attrs}
                                            >
                                                <div className={cx("action")} >
                                                    <div className={cx("item2")} onClick={() => handleAddList(song)}>
                                                        <i class="fa-solid fa-circle-plus"></i>
                                                        <p>Add to playlist</p>
                                                    </div>
                                                    <a className={cx("item2")} href={song.url} onClick={() => console.log(`down`)}>Download</a>
                                                </div> 
                                            </div>
                                        )}
                                    >
                                        <i class="fa-solid fa-ellipsis"></i>
                                    </Tippy>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
