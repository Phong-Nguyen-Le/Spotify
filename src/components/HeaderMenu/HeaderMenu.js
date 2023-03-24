import React from "react";
import classNames from "classnames/bind";
import styles from "./HeaderMenu.module.scss";
import Tippy from "@tippyjs/react/headless"; // different import path!

let cx = classNames.bind(styles);

function HeaderMenu() {
   
    const menuList = [
        {
            icon: <i class="fa-solid fa-ban"></i>,
            title: "Danh sách chặn",
            content: [],
        },
        {
            icon: <i class="fa-solid fa-music"></i>,
            title: "Chất lượng nhạc",
            icon2: <i class="fa-solid fa-chevron-right"></i>,
            content: [
                {
                    title: "SQ 128",
                    content: "Giảm sử dụng dữ liệu cho các kết nối chậm hơn",
                },
                {
                    title: "HQ 320",
                    content:
                        "Kết hợp tốt nhất giữa việc sử dụng dữ liệu và chất lượng âm thanh",
                },
            ],
        },
        {
            icon: <i class="fa-solid fa-display"></i>,
            title: "Giao diện",
            icon2: <i class="fa-solid fa-chevron-right"></i>,
            content: [
                {
                    content: "luôn phát nhạc toàn màn hình",
                },
                {
                    content: "Hiệu ứng",
                },
            ],
        },
        {
            icon: <i class="fa-solid fa-arrows-turn-right"></i>,
            title: "Chuyển bài",
            icon2: <i class="fa-solid fa-chevron-right"></i>,
            content: [
                {
                    content: "Chuyển bài mượt mà (Crossfade)",
                },
            ],
        },
        {
            icon: <i class="fa-solid fa-circle-info"></i>,
            title: "Giới thiệu",
            content: [],
        },
        {
            icon: <i class="fa-solid fa-phone-flip"></i>,
            title: "Liên hệ",
            content: [],
        },
        {
            icon: <i class="fa-brands fa-adversal"></i>,
            title: "Quảng cáo",
            content: [],
        },
        {
            icon: <i class="fa-solid fa-handshake"></i>,
            title: "Thỏa thuận sử dụng",
            content: [],
        },
        {
            icon: <i class="fa-solid fa-shield"></i>,
            title: "Chính sách bảo mật",
            content: [],
        },
    ];

    // test

    return (
        <div className={cx("wrapper")}>
            {menuList.map((item) => (
                <Tippy
                    interactive
                    // visible
                    placement="left-start"
                    render={(attrs) => (
                        <div className="box" tabIndex="-1" {...attrs}>
                            <div className={cx("wrapper-2")}>
                                {item.content.map((item) => {
                                    return (
                                        <div className={cx("item2")}>
                                            <h3>{item.title}</h3>
                                            <span>{item.content}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                >
                    <div className={cx("item")}>
                        {item.icon}
                        <h3>{item.title}</h3>
                        <span>{item.icon2}</span>
                    </div>
                </Tippy>
            ))}
        </div>
    );
}

export default HeaderMenu;
