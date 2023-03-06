import React from "react";
import './BtnSlide.css'

const leftArrow = <i class="fa-solid fa-caret-left"></i>
const rightArrow = <i class="fa-solid fa-caret-right"></i>


                

function BtnSlider({direction, moveSlide}) {
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            {direction === "next" ? rightArrow : leftArrow}
        </button>
    )
}

export default BtnSlider