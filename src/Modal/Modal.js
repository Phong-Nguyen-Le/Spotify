import React from "react";
import styles from "./Modal.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import clsx from "clsx";

const cx = classNames.bind(styles);

function Modal({modal, toggleModal, author, description, image, postId, modalId}) {
    console.log(`postID`, postId)
    console.log(`modalId`,modalId)

    if (modal) {
        document.body.classList.add(cx("active-modal"));
    } else {
        document.body.classList.remove(cx("active-modal"));
    }

    return (
        <>
            {modal && (postId == modalId) && (
                <div className={cx("modal")}>
                    <div onClick={toggleModal} className={cx("overlay")}>Overlay</div>
                    <div className={cx("modal-content")}>
                        <h3>{author}</h3>
                        <h4>{description}</h4>
                        <img src={image}/>
                        <button className={cx("close-modal")} onClick={toggleModal}>
                            CLOSE
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
