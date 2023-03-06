import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DataPosts from '../../data/db.json'
import Modal from "../../Modal/Modal";

function Hotnews() {
    const dataPosts = DataPosts.Post
    console.log(dataPosts)

    const [id, setId] = useState()
    
    const navbar = [
        {
            id: 1,
            name: 'Việt Nam'
        },
        {
            id: 2,
            name: 'US-UK'
        },
        {
            id: 3,
            name: 'K-POP'
        },
        {
            id: 4,
            name: 'Hoa Ngữ'
        },
        {
            id: 5,
            name: 'Nổi bật'
        },
    ]
    

    const handleSetId = (id) => {
        setId(id)
    }

    return (
        <Tabs className=" col-span-3 bg-gray-600">
            <TabList className="flex justify-between mt-3 bg-slate-700 w-[500px] mx-auto rounded-xl">
                    {navbar.map((item) => {
                        return (
                            <Tab onClick={() => {handleSetId(item.id)}} className={`py-1 rounded-xl w-24 text-center text-white uppercase text-xs hover:text-slate-500 ${item.id === id && 'bg-red-500'}`}>{item.name}</Tab>
                        )
                    })}
            </TabList>

            {/* Post Viet Nam */}
            <TabPanel className=" grid grid-cols-3 mt-5 mx-14">
                {dataPosts.map((post) => {
                    return (
                        <div className="mx-2 my-2 bg-slate-800 text-white rounded-xl">
                            <h2>{post.description}</h2>
                            <img className="w-[90%] mx-auto my-3" src={post.image}></img>
                            <div className="mb-5">
                                <span className=""> <i class="fa-regular fa-heart"></i>999</span>
                                <span className=""> <i class="fa-regular fa-comment"></i>999</span>
                            </div>
                        </div>
                    )
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

export default Hotnews