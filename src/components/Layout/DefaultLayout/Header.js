import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../SearchBar/SearchBar";
import HeaderAction from "../../HeaderAction/HeaderAction";

export default function Header() {
    return (
        <div className="w-screen max-lg:h-28 lg:h-16 xl:h-20 lg:text-l background-color">
            <div className="w-full max-lg:h-28 lg:h-16 xl:h-20 top-0 grid grid-cols-7 z-[3] background-color fixed">
                <div className="col-span-1 text-white text-2xl flex justify-center items-center ">
                    <Link to="/">
                        <div className="text-center max-md:text-base max-md:pl-5">
                            <i class="fa-brands fa-spotify"></i>
                            SpotiFong
                        </div>
                    </Link>
                </div>

                <div className="col-span-4 flex justify-center items-center">
                    <SearchBar />
                </div>

                <div className="col-span-2 flex justify-around items-center">
                    <HeaderAction />
                </div>
            </div>
        </div>
    );
}
