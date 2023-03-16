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
            <div className="col-span-2 overflow-y-scroll">
                <table className=" table-auto">
                    <thead className="text-white h-12">
                        <tr>
                            <th className="w-[10%]">#</th>
                            <th className="text-left">TITLE</th>
                            <th className="w-[10%]">AUTHOR</th>
                            <th className="w-[10%]">Setting</th>
                            <th className="w-[10%]">
                                <i className="fa fa-download"></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {DataSongs.map((song, index) => (
                            <tr
                                key={index}
                                className={`h-12 text-white hover:bg-slate-100 hover:text-blue-700 ${
                                    idSong === song.id &&
                                    "text-red-600 bg-slate-200"
                                }`}
                            >
                                <td className="text-center">{index + 1}</td>
                                <td onClick={() => handlePlaysong(song.id,"home")}>
                                    {song.name}
                                </td>
                                <td className="text-center">{song.author}</td>
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
                                                    <div className="relative" onClick={() => handleAddList(song)}>
                                                        <i class="fa-solid fa-circle-plus"></i>
                                                        Add to playlist
                                                    </div>
                                                    <div>Download</div>
                                                </div> 
                                            </div>
                                        )}
                                    >
                                        <i class="fa-solid fa-ellipsis"></i>
                                    </Tippy>
                                </td>
                                <td className="text-center">
                                    <i
                                        href={song.url}
                                        className="fa fa-download"
                                    ></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
