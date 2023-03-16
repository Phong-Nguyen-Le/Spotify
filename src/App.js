import logo from "./logo.svg";
import "./App.css";
import { Fragment, useEffect, useState } from "react";

//import Data
import DataSongs from "./data/songs.json";
import { Songs } from "./Context";

//import React router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes} from "./routes";
import { DefaultLayout } from "./components/Layout";

function App() {
     // Thay đổi địa điểm phát nhạc (Home / placelist)
     const [place, setPlace] = useState("");
    console.log(`place1`, place)

    // DataSongs[0]
    const [song, setSong] = useState("");
    const handleSetSong = (idSong, placePara) => {
        console.log(`before-place:`, placePara )
        
        if( placePara ) {
            setPlace(placePara);
        } else placePara = place
        console.log(`place:`, place)
        console.log(`song:`, song)
        if (placePara == "home") {
            const song = DataSongs.find((song) => song.id === idSong);
            if (!song) {
                setSong(DataSongs[0]); 
            } else {
                setSong(song);
                console.log(`song:`, song)
            }
        } else if (placePara == "playlist") {
            const song = playList.find((song) => song.id === idSong);
            if (!song) {
                setSong(playList[0]);
            } else {  
                setSong(song);
            }
        }
    };

    // Thêm bài hát vào danh sách phát
    const [playList, setPlayList] = useState([]);
    const handleAddList = (song) => {
        if (playList.includes(song)) return;
        setPlayList((pre) => [...pre, song]);
    };
    const handleDeleteItemfromList = (idSong) => {
        const newPlayList = playList.filter((item) => item.id !== idSong);
        setPlayList(newPlayList);
    };

    return (
        <Songs.Provider
            value={{
                DataSongs,
                song,
                handleSetSong,
                handleAddList,
                handleDeleteItemfromList,
                playList
            }}
        >
            <Router>
                <div className="App">
                    {/* CHILDREN THAY ĐỔI */}
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            let Layout = DefaultLayout;
                            if (route.layout) {
                                Layout = Fragment;
                            }
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <route.component />
                                        </Layout>
                                    }
                                ></Route>
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </Songs.Provider>
    );
}

export default App;
