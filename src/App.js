import logo from "./logo.svg";
import "./App.css";
import { Fragment, useState } from "react";

//import Data
import DataSongs from "./data/songs.json";
import { Songs } from "./Context";

//import React router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import { DefaultLayout } from "./components/Layout";


function App() {
    const [song, setSong] = useState(DataSongs[0]);
    const handleSetSong = (idSong) => {
        const song = DataSongs.find((song) => song.id === idSong);
        if (!song) {
            setSong(DataSongs[0]);
        } else {
            setSong(song);
        }
    };

    return (
        <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
            <Router>
                <div className="App">
                    {/* CHILDREN THAY ĐỔI */}
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            let Layout = DefaultLayout;
                            if(route.layout){
                              Layout = Fragment
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
