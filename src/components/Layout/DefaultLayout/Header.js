import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../../SearchBar/SearchBar";
import HeaderAction from "../../HeaderAction/HeaderAction";

export default function Header() {
    return (
        <div className=" w-screen h-24 web-name fixed top-0 grid grid-cols-7 z-[3]">
            <div className="col-span-1 text-white text-2xl leading-[6rem]">
                <Link to="/">
                    <i class="fa-brands fa-spotify mr-5 ml-10"></i>
                    SpotiFong
                </Link>
            </div>

            {/* Search bar */}
            <div className="col-span-4 flex justify-center items-center">
                <SearchBar />
            </div>


            <div className="col-span-2 flex justify-around items-center">                
                <HeaderAction />
                
            </div>
        </div>
    );
}
