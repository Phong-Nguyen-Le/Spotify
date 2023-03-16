import React from "react";
import classNames from "classnames/bind";
import styles from "./VipMember.module.scss";
import Tippy from "@tippyjs/react/headless"; // different import path!
import { Link } from "react-router-dom";
import imageVip from "../../data/carousel/image-vip.png";

let cx = classNames.bind(styles);

function VipMember() {
    return (
        <div>
            {/* HEADER */}
            <header className={cx("header")}>
                <Link to="/">
                    <div className={cx("logo")}>SpotiFong</div>
                </Link>
                <ul className={cx("menu")}>
                    <li className={cx("menu-item")}>VIP Package</li>
                    <li className={cx("menu-item")}>VIP Code </li>
                    <li className={cx("menu-item")}>Data Package</li>
                    <li className={cx("menu-item")}>Support Services</li>
                </ul>
                <div className={cx("login-btn")}>
                    <button>Login</button>
                </div>
            </header>
            {/* BODY */}
            <div className={cx("body")}>



                <div className={cx("package-container")}>
                    <div className={cx("logo-headphone")}>
                        <i class="fa-solid fa-headphones-simple"></i>
                    </div>
                    <h1>Âm nhạc không giới hạn</h1>
                    <p>
                        Dịch vụ nghe nhạc online chất lượng cao, kết hợp cùng
                        với các tiện ích dành cho thành viên VIP
                    </p>
                    <div className={cx("packages")}>
                        <div className={cx("package")}>
                            <h3>6 tháng</h3>
                            <div className={cx("line")}></div>
                            <div className={cx("now-price")}>
                                <div className={cx("price-before-dot")}>279</div>
                                <div className={cx("price-after-dot")}>
                                    <div className={cx("price-number")}>.000</div>
                                    <div className={cx("price-currency")}>VNĐ</div>
                                </div>
                            </div>
                            <p className={cx("old-price")}>354.000 VNĐ</p>
                            <button>Mua VIP</button>
                        </div>
                        <div className={cx("package")}>
                            <h3>6 tháng</h3>
                            <div className={cx("line")}></div>
                            <div className={cx("now-price")}>
                                <div className={cx("price-before-dot")}>279</div>
                                <div className={cx("price-after-dot")}>
                                    <div className={cx("price-number")}>.000</div>
                                    <div className={cx("price-currency")}>VNĐ</div>
                                </div>
                            </div>
                            <p className={cx("old-price")}>354.000 VNĐ</p>
                            <button>Mua VIP</button>
                        </div>
                        <div className={cx("package")}>
                            <h3>6 tháng</h3>
                            <div className={cx("line")}></div>
                            <div className={cx("now-price")}>
                                <div className={cx("price-before-dot")}>279</div>
                                <div className={cx("price-after-dot")}>
                                    <div className={cx("price-number")}>.000</div>
                                    <div className={cx("price-currency")}>VNĐ</div>
                                </div>
                            </div>
                            <p className={cx("old-price")}>354.000 VNĐ</p>
                            <button>Mua VIP</button>
                        </div>
                    </div>
                    <p>Lưu ý: Cần đăng nhập trước khi mua</p>
                </div>



                <div className={cx("vip-banner")}>

                    <h3>Quà Vip gửi tặng bạn bè</h3>
                    <p>Cùng tận hưởng âm nhạc không giới hạn</p>
                    <button>Mua code vip</button>
                   
                </div>

                <div className={cx("another-packages")}>
                    <div className={cx("package-item")}>
                        <h3>Vip 1 tháng</h3>
                        <span></span>
                        <p>
                            Tải app SpotiFong trên điện thoại và đăng ký Vip chỉ
                            với
                        </p>
                        <div></div>
                    </div>
                    <div className={cx("package-item")}>
                        <h3>Vip 1 tháng</h3>
                        <span></span>
                        <p>
                            Tải app SpotiFong trên điện thoại và đăng ký Vip chỉ
                            với
                        </p>
                        <div></div>
                    </div>
                </div>

                <div className={cx("about-vip")}>
                    <h2>SpotiFong VIP là gì</h2>
                    <p>
                        SpotiFong VIP là dịch vụ nghe nhạc Online chất lượng
                        cao, kết hợp cùng các tiện ích dành riêng cho thành viên
                        VIP
                    </p>
                    <ul>
                        <li>
                            <img
                                src="https://static-zmp3.zmdcdn.me/skins/zmp3-v5.1/vip/images/ic-code-block.svg"
                                alt="SpotiFong"
                            ></img>
                            <span>not be bothered by ads</span>
                        </li>
                        <li>
                            <img
                                src="https://static-zmp3.zmdcdn.me/skins/zmp3-v5.1/vip/images/ic-code-listen.svg"
                                alt="SpotiFong"
                            ></img>
                            <span>
                                Listen to music offline in Lossless quality
                            </span>
                        </li>
                        <li>
                            <img
                                src="https://static-zmp3.zmdcdn.me/skins/zmp3-v5.1/vip/images/ic-code-fullhd.svg"
                                alt="SpotiFong"
                            ></img>
                            <span>Upload up to 1000 songs</span>
                        </li>
                        <li>
                            <img
                                src="https://static-zmp3.zmdcdn.me/skins/zmp3-v5.1/vip/images/ic-code-fullhd.svg"
                                alt="SpotiFong"
                            ></img>
                            <span>Watch MV in Full HD quality</span>
                        </li>
                    </ul>
                </div>

                <div className={cx("quality")}>
                    <h2>Listen to high-quality music</h2>
                    <div className={cx("quality-content")}>
                        <h4>Quality</h4>
                        <p>
                            Lossless quality songs will help you have a
                            listening experience in the home auditorium.
                        </p>
                        <h4>Content</h4>
                        <p>
                            Continuously update the latest albums and songs on
                            the domestic and foreign music market.
                        </p>
                        <h4>Upload</h4>
                        <p>
                            Feel free to upload unlimited music you love to Zing
                            MP3.
                        </p>
                    </div>
                    <div className={cx("quality-image")}>
                        <img src={imageVip}></img>
                    </div>
                </div>

                <div className={cx("library")}>
                    <h2>Enter code VIP</h2>
                    <p>
                        Purchased VIP code, click below to activate. Listen to
                        music, watch high-quality MVs without ads and download
                        music stores only for VIP accounts.
                    </p>
                    <button>Enter Code</button>
                </div>

                <footer>
                    <h4>A product of Phong</h4>
                    <ul>
                        <li>About us</li>
                        <li>Contact</li>
                        <li>Advertising</li>
                        <li>Feedback</li>
                        <li>Agreement</li>
                    </ul>
                </footer>
            </div>
        </div>
    );
}

export default VipMember;
