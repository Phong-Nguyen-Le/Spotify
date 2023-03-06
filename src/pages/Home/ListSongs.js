import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../../Context";

export default function ListSongs() {
    const {DataSongs, handleSetSong, song} = useContext(Songs)
    const [idSong, setIdSong] = useState(0)
    const handlePlaysong = (idSong) => {
        handleSetSong(idSong)
    }
    useEffect(() => {
        setIdSong(song.id)
    }, [song])

    return (
        <>
        <div className="col-span-2 overflow-y-scroll">
            <table className=" table-auto">
                <thead className="text-white h-12">
                    <tr>
                        <th className="w-[10%]">#</th>
                        <th className="text-left">TITLE</th>
                        <th className="w-[10%]">AUTHOR</th>
                        <th className="w-[10%]"><i className="fa fa-download"></i></th>
                    </tr>
                </thead>
                <tbody className="">
                    {DataSongs.map((song, index) => (
                        <tr key={index} 
                        className={`body-background h-12 text-gray-900 hover:bg-slate-200 hover:text-blue-700 ${idSong === song.id && 'text-red-600 bg-slate-200'}`} 
                        onClick={() => handlePlaysong(song.id)}
                        >
                        <td className="text-center">{index+1}</td>
                        <td>{song.name}</td>
                        <td className="text-center">{song.author}</td>
                        <td className="text-center"><i href={song.url} className="fa fa-download"></i></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>      
    )
}