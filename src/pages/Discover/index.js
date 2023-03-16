import React from "react";
import NewAlbum from "../../components/NewAlbum/NewAlbum";
import Slider from "../../components/Slider";

function Discover() {
    return (
        <div className="col-span-6 px-14">
            <Slider />  
            <NewAlbum />
        </div>
    )
}

export default Discover;