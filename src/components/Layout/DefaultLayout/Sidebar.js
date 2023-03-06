import React from "react";
import {Link} from 'react-router-dom'
import { publicRoutes } from "../../../routes";


export default function Sidebar() {
    return (
        <div className="h-full navbar font-bold text-white bg-slate-800 fixed">
            <ul className="border-b-2">
                {publicRoutes.map((route, index) => 
                        <li className=" px-10 py-3 text-left" key={index}>
                            <Link to={route.path}>{route.name}</Link>
                        </li>
                )}
            
            </ul>
            
            
        </div>
    )
}

