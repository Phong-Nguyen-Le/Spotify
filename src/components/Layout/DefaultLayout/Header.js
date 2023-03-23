import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../SearchBar/SearchBar";
import HeaderAction from "../../HeaderAction/HeaderAction";
import { Songs } from "../../../Context";


export default function Header() {
    const {handleShowMenu} = useContext(Songs)
    return (
        <div className="w-screen max-md:h-20 max-lg:h-28 lg:h-16 xl:h-20 lg:text-l background-color">
            <div className="w-full max-md:h-20 max-lg:h-28 lg:h-16 xl:h-20 top-0 grid grid-cols-7 max-md:grid-cols-5 z-[3] background-color fixed">
                <div className="col-span-1 max-md:col-span-5 text-white text-2xl flex justify-center items-center">
                    <Link to="/">
                        <div className="text-center max-md:text-lg max-md:pl-5">
                            <i class="fa-brands fa-spotify"></i>
                            SpotiFong
                        </div>
                    </Link>
                </div>
                <div onClick={handleShowMenu} className="md:hidden col-span-1 text-white flex items-center justify-center text-lg"><i class="fa-solid fa-bars"></i></div>
                <div className="col-span-4 max-md:col-span-3 flex justify-center items-center">
                    <SearchBar />
                </div>

                <div className="col-span-2 flex justify-around items-center max-md:col-span-1">
                    <HeaderAction />
                </div>
            </div>
        </div>
    );
}
