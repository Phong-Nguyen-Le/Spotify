import React, { useState } from "react";


function Another() {
    const [news, setNews] = useState({})
    return (
        <div className=" col-span-3">
            {/* Input news */}
            <div className=" bg-white  flex flex-col w-[400px] ml-5">
                <input className=" bg-slate-500" type="text" placeholder="Author name"></input>
                <input className=" bg-slate-500" type="" placeholder="Description"></input>
                <input className=" bg-slate-500" type="" placeholder="Image"></input>
            </div>
        </div>
    )
}

export default Another;