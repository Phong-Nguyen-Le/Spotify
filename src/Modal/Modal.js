import React from "react";
import styles from "./Modal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Modal({
    modal,
    toggleModal,
    author,
    description,
    image,
    postId,
    modalId,
}) {
    if (modal) {
        document.body.classList.add(cx("active-modal"));
    } else {
        document.body.classList.remove(cx("active-modal"));
    }

    return (
        <>
            {modal && postId == modalId && (
                <div className={cx("modal")}>
                    <div onClick={toggleModal} className={cx("overlay")}></div>
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        className={cx("modal-content")}
                    >   
                  


                        <div className={cx("left-content")}>
                            <img src={image} />
                        </div>
                        <div className={cx("right-content")}>
                            <div className={cx("author")}>
                                <img className={cx("avatar")} src={image}></img>
                                <span>
                                    <h3>{author}</h3>
                                    <p>Time line</p>
                                </span>
                            </div>
                            <span></span>
                            <p>{description}</p>
                            <span></span>
                            <div className={cx("action")}>
                                <div>
                                    <i class="fa-regular fa-heart"> </i>
                                    <p>like</p>
                                </div>
                                <div>
                                    <i class="fa-regular fa-share-from-square"></i>
                                    <p>Share</p>
                                </div>
                            </div>
                            <span></span>
                            <div className={cx("comment-container")}>
                                <i class="fa-regular fa-comment"></i>
                                <p>No comments yet</p>
                            </div>
                            <button className={cx("login-btn")}>
                                Sign in to comment
                            </button>
                        </div>


                        <button
                            className={cx("close-modal")}
                            onClick={toggleModal}
                        >
                            <i class="fa-regular fa-circle-xmark"></i>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
