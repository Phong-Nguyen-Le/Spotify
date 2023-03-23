import React from "react";
import classNames from "classnames/bind";
import styles from "./HeaderAction.module.scss";
import Tippy from "@tippyjs/react/headless"; // different import path!
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { Link } from "react-router-dom";

let cx = classNames.bind(styles);

function HeaderAction() {
    return (
        <>
            <button className={cx("download-btn")}>
                {" "}
                <i class="fa-solid fa-download"></i> Download App
            </button>
            <Link to="/loginPage">
            <button className={cx("login-btn")} title="login">Login</button>
            </Link>
            <Tippy
                trigger="click"
                interactive
                // visible
                placement="bottom-end"
                render={(attrs) => (
                    <div className="box" tabIndex="-1" {...attrs}>
                        <HeaderMenu />
                    </div>
                )}
            >
                <button className={cx("menu-btn")}>
                     <i class="fa-solid fa-gear"></i>
                </button>
            </Tippy>
        </>
    );
}

export default HeaderAction;
