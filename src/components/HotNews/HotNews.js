import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DataPosts from "../../data/db.json";
import Modal from "../../Modal/Modal";
import classNames from "classnames/bind";
import styles from "./HotNews.module.scss";

const cx = classNames.bind(styles);
function Hotnews() {
    const dataPosts = DataPosts.Post;
    const [modalId, setModalId] = useState();

    const [modal, setModal] = useState(false);

    const toggleModal = (id) => {
        setModalId(id);
        setModal(!modal);
    };

    const [id, setId] = useState(1);

    const navbar = [
        {
            id: 1,
            name: "Việt Nam",
        },
        {
            id: 2,
            name: "US-UK",
        },
        {
            id: 3,
            name: "K-POP",
        },
        {
            id: 4,
            name: "Hoa Ngữ",
        },
        {
            id: 5,
            name: "Nổi bật",
        },
    ];

    console.log(modalId);

    const handleSetId = (id) => {
        setId(id);
    };

    return (
        <Tabs className=" col-span-3">
            <TabList className="flex justify-between mt-3 bg-slate-700 w-[500px] mx-auto rounded-xl">
                {navbar.map((item) => {
                    return (
                        <Tab
                            onClick={() => {
                                handleSetId(item.id);
                            }}
                            className={`py-1 rounded-xl w-24 text-center text-white uppercase text-xs hover:text-slate-500 ${
                                item.id === id && "bg-red-500"
                            }`}
                        >
                            {item.name}
                        </Tab>
                    );
                })}
            </TabList>

            {/* Post Viet Nam */}
            <TabPanel className=" grid grid-cols-3 mt-5 mx-14">
                {dataPosts.map((post) => {
                    return (
                        <div
                            key={post.id}
                            onClick={() => toggleModal(post.id)}
                            className={cx(
                                "wrapper"
                            )}
                        >
                            <div>
                                <img
                                    className={cx("avatar")}
                                    src={post.image}
                                ></img>
                                <span>
                                    <h3>{post.author}</h3>
                                    <p>Time line</p>
                                </span>
                            </div>
                            <p>{post.description}</p>
                            <img className={cx("image")} src={post.image}></img>
                            <div className="mb-1">
                                <span className="">
                                    {" "}
                                    <i class="fa-regular fa-heart"></i>999
                                </span>
                                <span className="">
                                    {" "}
                                    <i class="fa-regular fa-comment"></i>999
                                </span>
                            </div>
                            <Modal
                                modal={modal}
                                toggleModal={toggleModal}
                                author={post.author}
                                description={post.description}
                                image={post.image}
                                postId={post.id}
                                modalId={modalId}
                            />
                        </div>
                    );
                })}
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 3</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 4</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 5</h2>
            </TabPanel>
        </Tabs>
    );
}

export default Hotnews;
