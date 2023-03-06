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
            level2: false,
            content: []
        },
        {
            icon: <i class="fa-solid fa-music"></i>,
            title: "Chất lượng nhạc",
            level2: true,
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
            level2: true,
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
            level2: true,
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
            level2: false,
            content: []
        },
        {
            icon: <i class="fa-solid fa-circle-info"></i>,
            title: "Liên hệ",
            level2: false,
            content: []
        },
        {
            icon: <i class="fa-brands fa-adversal"></i>,
            title: "Quảng cáo",
            level2: false,
            content: []
        },
        {
            icon: <i class="fa-solid fa-handshake"></i>,
            title: "Thỏa thuận sử dụng",
            level2: false,
            content: []
        },
        {
            icon: <i class="fa-solid fa-shield"></i>,
            title: "Chính sách bảo mật",
            level2: false,
            content: []
        },
    ];

    return (
        <div className={cx("wrapper")}>
            {menuList.map((item) => (
                <Tippy
                    interactive
                    // visible
                    placement="left-start"
                    render={(attrs) => (
                        <div className="box" tabIndex="-1" {...attrs}>
                            {item.content.map((item) => {
                                return <div>
                                        {item.title}
                                        {item.content}
                                    </div>
                            })}
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
