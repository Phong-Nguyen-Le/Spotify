import React, { useState } from "react";
import { Link } from "react-router-dom";
import { publicRoutes } from "../../routes";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss"


const cx = classNames.bind(styles)

export default function Sidebar() {

    const [active, setActive] = useState('')


    return (
        <div className="h-[calc(100vh-88px-96px)]  w-[250px] navbar font-bold text-white bg-slate-800 fixed">
            <ul className="border-b-2">
                {publicRoutes.map((route, index) => {
                    if (!route.layout) {
                        return (
                            <Link to={route.path}>
                                <li
                                    className={`px-10 py-3 text-left text-gray-300 transition-[transform 0.6s ease-in-out] hover:text-white ${active == index && "bg-[#e8e8e836]"}`}
                                    key={index}
                                    onClick={() => setActive(index)}
                                >
                                    <div className=" flex items-center">
                                        {route.icon}
                                        <h2 className=" pl-5">{route.name}</h2>
                                    </div>
                                </li>
                            </Link>
                        );
                    }
                })}
            </ul>
            <div className={cx("login")}>
                <p>Sign in to discover playlists just for you</p>
                <Link to="loginPage">
                <button >Login</button>
                </Link>
            </div>
            <div className={cx("vip")}>
                <p>Listen to music without ads with VIP packages</p>
                <Link to="vippage">
                <button >Buy VIP</button>
                </Link>
            </div>
            
        </div>
    );
}
