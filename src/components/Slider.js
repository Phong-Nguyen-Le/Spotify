import React, { useEffect, useState } from "react";
import {DataImages} from "../data/carousel";
import BtnSlider from "./BtnSlide/BtnSlide";
import './BtnSlide/BtnSlide.css'
import clsx from "clsx";

function Slider() {
// UseState
    const [slideIndex, setSlideIndex] = useState(0)


    useEffect(() => {
        let timer = setTimeout(() => {
            if(slideIndex === DataImages.length-1){
                setSlideIndex(0)
            } else {setSlideIndex(slideIndex+1)}
        }, 3000)
        return () => {
            clearTimeout(timer)
        }
    },[slideIndex])

// onClick
    const nextSlide = () => {
        if(slideIndex !== DataImages.length - 1){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === DataImages.length - 1){
            setSlideIndex(0)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 0){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 0){
            setSlideIndex(DataImages.length - 1)
        }
    }
   


    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
            <div className="grid grid-cols-3 mb-[25px] h-[250px] relative">
                {DataImages.map((image, index) => {
                    return (
                        <div className={clsx(slideIndex === index? "slide active" : "slide")} key={index}>
                            <img className="rounded-3xl"
                                src={image}
                            />
                        </div>
                    )
                })}
                {/* Hard Code */}
                <BtnSlider moveSlide={nextSlide} direction={"next"}/>
                <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
                
                <div className="container-dots">
                {Array.from({length: 6}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index)}
                    className={slideIndex === index? "dot active" : "dot"}
                    ></div>
                ))}
                </div>
            </div>   
    )
}

export default Slider