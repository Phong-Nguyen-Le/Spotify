import React from "react";
import { Link } from "react-router-dom";
import { publicRoutes } from "../../../routes";


export default function Sidebar() {
    return (
        <div className="h-[calc(100vh-88px-96px)]  w-[250px] navbar font-bold text-white bg-slate-800 fixed">
            <ul className="border-b-2">
                {publicRoutes.map((route, index) => (
                    <Link to={route.path}>
                        <li className=" px-10 py-3 text-left text-gray-200 transition-[transform 0.6s ease-in-out] hover:text-white hover:scale-105" key={index}>
                            <div className=" flex items-center">
                                {route.icon}
                                <h2 className=" pl-5">{route.name}</h2>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

