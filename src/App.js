import "./App.css";
import { Fragment, useState } from "react";

//import Data
import DataSongs from "./data/songs.json";
import { Songs } from "./Context";

//import React router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "./components/Layout";
import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



function App() {
    
    // Thay đổi địa điểm phát nhạc (Home / placelist)
    const [place, setPlace] = useState("");
    // DataSongs[0]
    const [song, setSong] = useState("");
    const handleSetSong = (idSong, placePara) => {
        if (placePara) {
            setPlace(placePara);
        } else placePara = place;
        if (placePara == "home") {
            const song = DataSongs.find((song) => song.id === idSong);
            if (!song) {
                setSong(DataSongs[0]);
            } else {
                setSong(song);
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

    // Hide/show Menu trên Mobile
    const [showMenu, setShownMenu] = useState(false);
    const handleShowMenu = () => {
        setShownMenu((pre) => !pre);
    };

    // Thêm bài hát vào danh sách phát + Xóa bài hát
    const [playList, setPlayList] = useState([]);
    const handleAddList = (song) => {
        if (playList.includes(song)) {
            displayMsg('Bài hát đã có trong Playlist !!!', false, 1000)
        } else {
            setPlayList((pre) => [...pre, song]);
            displayMsg('Thêm vào Playlist thành công!', true, 500)
        }

    };

    const handleDeleteItemfromList = (idSong) => {
        const newPlayList = playList.filter((item) => item.id !== idSong);
        setPlayList(newPlayList);
        displayMsg('Xóa khỏi Playlist thành công!', true , 500)
    };



    // Show toast
    const Msg = ({content,type}) => (
        <div>
          <p className={`text-center font-bold ${type&& "text-green-500" || "text-red-600" }`}>{content}</p>
        </div>
      )

      const displayMsg = (toastContent, type, timeToClose) => {
        toast(<Msg content={toastContent} type={type}/>, {
            position: toast.POSITION.TOP_RIGHT,
            className: 'toast-message',
            autoClose: timeToClose,
            transition: Zoom
        }) 
      }



    return (
        <Songs.Provider
            value={{
                DataSongs,
                song,
                handleSetSong,
                handleAddList,
                handleDeleteItemfromList,
                playList,
                showMenu,
                handleShowMenu,
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
