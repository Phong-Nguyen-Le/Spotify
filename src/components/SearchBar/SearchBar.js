import React, { useEffect, useState, useContext, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./SearchBar.module.scss";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../Popper";
import { Songs } from "../../Context";

let cx = classNames.bind(styles);

function SearchBar() {
    const { DataSongs, handleSetSong, song, handleAddList } = useContext(Songs);
    const [searchInput, setSearchInput] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true)

    const searchItems = (event) => {
        setSearchInput(event);
    };
    


    const inputRef = useRef()
    useEffect(() => {
        let filterData = [];
        if (searchInput !== "") {
            filterData = DataSongs.filter((item) => {
                return (
                    item.name
                        .toLowerCase()
                        .includes(searchInput.toLowerCase()) ||
                    item.author
                        .toLowerCase()
                        .includes(searchInput.toLowerCase())
                );
            });
        }
        setSearchResult(filterData);
    }, [searchInput]);
    const handleHideResult = () => {
        setShowResult(false)
    }

    const handleClearResult = () => {
        setSearchInput('')
        inputRef.current.focus()
    }


    console.log(document.getElementsByClassName(cx("search"))[0])

    return (
        <Tippy
            onClickOutside={handleHideResult}
            interactive
            visible={searchResult.length > 0 && showResult}
            render={(attrs) => (
                <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx("search-title")}>{`${searchResult.length} matches were found`}</h4>
                        {searchResult.map((song) => {
                            return (
                                <div className={cx("search-result-item")}>
                                    <img
                                        onClick={() => {
                                            handleSetSong(song.id, "home");
                                        }}
                                        src={song.links.images[1].url}
                                    ></img>
                                    <div
                                        className={cx("search-result-content")}
                                        onClick={() => {
                                            handleSetSong(song.id, "home");
                                        }}
                                    >
                                        <p>{song.name}</p>
                                        <span>{song.author}</span>
                                    </div>
                                    <div className={cx("search-result-action")}>
                                        <i class="fa-regular fa-heart"></i>
                                        <i class="fa-solid fa-ellipsis"></i>
                                    </div>
                                </div>
                            );
                        })}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx("search")}>
                <input
                    className={cx("input")}
                    ref={inputRef}
                    value={searchInput}
                    placeholder="Search for song, artist..."
                    onFocus={()=>setShowResult(true)}
                    onChange={(e) => {
                        searchItems(e.target.value);
                    }}
                ></input>
                {searchInput && <button onClick={handleClearResult} className={cx("clear")}>
                    <i class="fa-solid fa-circle-xmark"></i>
                </button>}
                {/* <button onClick={() => console.log('clear')} className={cx("loading")}>
                    <i class="fa-solid fa-spinner"></i>
                </button> */}
                <button 
                    onClick={()=>setShowResult(true)}
                    className={cx("search-btn")}
                >
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </Tippy>
    );
}

export default SearchBar;
