import ListSongs from "./ListSongs";
import DetailSong from "./DetailSong";

function Home() {
    return (
        <div className=" col-span-3 grid grid-cols-3 h-[calc(100vh-88px-96px)]">
            {/* span1 */}
            <DetailSong/>
            {/* span2 */}
            <ListSongs/>   
        </div>
    )
}

export default Home;