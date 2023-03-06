import React from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless"; // different import path!
import HeaderMenu from "../../HeaderMenu/HeaderMenu";

export default function Header() {
    return (
        <div className=" w-screen h-24 z-10 web-name fixed top-0 grid grid-cols-7 ">
            <div className="col-span-1 text-white text-2xl leading-[6rem]">
                <Link to="/">
                    <i class="fa-brands fa-spotify mr-5"></i>
                    SpotiFong
                </Link>
            </div>

            {/* Search bar */}
            <div className="col-span-4 flex justify-center items-center">
                <form className=" bg-stone-200 w-[400px] h-[46px] flex justify-between items-cente rounded-3xl">
                    <input
                        className=" w-full bg-transparent active:border-none"
                        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                    ></input>
                    <button className=" w-12">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
            </div>

            {/* Action */}

            <div className="col-span-2 flex justify-around items-center">
                {/* Download  */}

                <div>
                    <span>
                        {" "}
                        <i class="fa-solid fa-download"></i>Download App
                    </span>
                </div>

                {/* Login button */}
                <button>Login</button>

                {/* Ellipsis */}
                <Tippy
                    interactive
                    // visible
                    placement="bottom-end"
                    render={(attrs) => (
                        <div className="box" tabIndex="-1" {...attrs}>
                            <HeaderMenu />
                        </div>
                    )}
                >
                    <div className=" px-5">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </Tippy>
            </div>
        </div>
    );
}
