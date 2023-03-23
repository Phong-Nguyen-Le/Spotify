import React, { useContext } from "react";
import { Songs } from "../../Context";

function NewAlbum() {
    const { DataSongs } = useContext(Songs);
    return (
        <div className="col-span-6">
            {/* Header */}
            <h2 className="text-2xl text-white font-bold">New Album</h2>
            {/* Navbar */}
            <div className="ml-[-8px] my-3">
                <button className=" text-white w-[100px] mx-2 border border-gray-800 border-solid rounded-full hover:text-gray-200">
                    Tất cả
                </button>
                <button className=" text-white w-[100px] mx-2 border border-gray-800 border-solid rounded-full hover:text-gray-200">
                    Việt Nam
                </button>
                <button className=" text-white w-[100px] mx-2 border border-gray-800 border-solid rounded-full hover:text-gray-200">
                    Quốc tế
                </button>
            </div>
            {/* Content */}
            <div className="grid grid-cols-4 max-2xl:grid-cols-3 mx-[-12px]">
                {DataSongs.map((song) => {
                    return (
                        <div className="grid grid-cols-3 w-[80%] bg-slate-800 mx-3 my-1 rounded-xl">
                            <div className="col-span-1 w-[90px] h-[90px]">
                                <img
                                    className="w-full h-full p-3"
                                    src={song.links.images[0].url}
                                ></img>
                            </div>
                            <div className=" col-span-2 p-3">
                                <div className="text-white">{song.name}</div>
                                <h4 className="text-white">{song.author}</h4>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default NewAlbum;
