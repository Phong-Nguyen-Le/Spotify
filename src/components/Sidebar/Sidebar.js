import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { publicRoutes } from "../../routes";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss"
import { Songs } from "../../Context";

const cx = classNames.bind(styles)

export default function Sidebar() {
   
    // Đổi màu background khi Hover vào menu
    const [active, setActive] = useState('')
    

    // hide/show Menu trên mobile
    const {showMenu} = useContext(Songs);
    console.log(showMenu)

    return (
        <div className={cx("background-color", "container", showMenu&&"active")}>
            <ul className="border-b-2 ">
                {publicRoutes.map((route, index) => {
                    if (!route.layout) {
                        return (
                            <Link to={route.path}>
                                <li
                                    className={cx(`${active == index && "bg-[#e8e8e836]"}`, "item")}
                                    key={index}
                                    onClick={() => setActive(index)}
                                >
                                    <div className="flex items-center">
                                        <i>{route.icon}</i>
                                        <h2 className="pl-5 max-xl:text-sm">{route.name}</h2>
                                    </div>
                                </li>
                            </Link>
                        );
                    }
                })}
            </ul>
            <div className={cx("login")}>
                <p>Sign in to discover playlists just for you</p>
                <Link to="/loginPage">
                <button >Login</button>
                </Link>
            </div>
            <div className={cx("vip")}>
                <p>Listen to music without ads with VIP packages</p>
                <Link to="/vippage">
                <button >Buy VIP</button>
                </Link>
            </div>
            
        </div>
    );
}
