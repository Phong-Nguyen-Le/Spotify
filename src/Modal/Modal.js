import React from "react";
import styles from "./Modal.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function Modal() {
    



    return (
        <div className={cx("modal")}>
            <div className={cx("overlay")}>
                Overlay
            </div>
            <div className={cx("modal-content")}>
                Modal content
            </div>
        </div> 
    )
}

export default Modal