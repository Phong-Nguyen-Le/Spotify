import Header from "./Header";
import Sidebar from "../../Sidebar/Sidebar";
import Playing from "./Playing";
import {Songs} from "../../../Context"
import React, { useContext} from "react";
import MyPlayList from "../../MyPlayList/MyPlayList";

function DefaultLayout({ children }) {
    const {song} = useContext(Songs)

    return (
        <div>
            <Header />
            <Sidebar />
            <div className="grid grid-cols-3 bg-slate-600 ml-[250px] max-xl:ml-[20%] max-lg:ml-[30%] home-background" >
                {children}
                <div className="h-[88px]"></div>
            </div>
            {/* FOOTER */}
            <div className="w-screen grid grid-cols-12 player-music fixed bottom-0">
                <div className="col-span-3 flex flex-col justify-center items-center">
                    <h2 className=" text-white">{song.name}</h2>
                    <h3 className=" text-white">{song.author}</h3>
                </div>
                <Playing />
                <div className="col-span-3 flex flex-col justify-center items-center relative">
                    <MyPlayList />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
