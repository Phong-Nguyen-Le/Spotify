import React from "react";
import classNames from "classnames/bind";
import styles from "./SearchBar.module.scss";

let cx = classNames.bind(styles)

function SearchBar() {

    return (
        <form className={cx("container")}>
            <input
                placeholder="Search for song, artist, lyrics"
            ></input>
            <button>
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    );
}

export default SearchBar
