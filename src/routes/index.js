//Router
import Home from '../pages/Home/index';
import Discover from '../pages/Discover';
import Hotnews from '../pages/Hotnews';
import LoginPage from '../pages/LoginPage';
import Another from '../pages/Another';
//new
import NewSong from '../pages/NewSong'
import MusicGenre from '../pages/MusicGenre'
import Top100 from '../pages/Top100'
import Mv from '../pages/Mv'

const headphoneIcon = <i class="fa-solid fa-headphones-simple"></i>
const glassIcon = <i class="fa-solid fa-magnifying-glass"></i>
const starIcon = <i class="fa-solid fa-star"></i>
const musicIcon = <i class="fa-solid fa-music"></i>
const indentIcon = <i class="fa-solid fa-indent"></i>
const rankIcon = <i class="fa-solid fa-ranking-star"></i>
const videoIcon = <i class="fa-solid fa-film"></i>
const loginIcon = <i class="fa-solid fa-arrow-right-to-bracket"></i>

const podcastIcon = <i class="fa-solid fa-podcast"></i>
const usergroupIcon = <i class="fa-solid fa-user-group"></i>
const icon1 = <i class="fa-solid fa-house"></i>
const icon3 = <i class="fa-solid fa-newspaper"></i>
const icon4 = <i class="fa-solid fa-person"></i>

const publicRoutes = [
    {path: '/', component: Home, name:'Home', icon: headphoneIcon },
    {path: '/discover', component: Discover, name: 'Discover', icon: glassIcon},
    {path: '/hotnews', component: Hotnews, name:'Hot News', icon:starIcon },
    // new
    {path: '/newsong', component: NewSong, name: 'NewSong', icon: musicIcon},
    {path: '/musicgenre', component: MusicGenre, name: 'MusicGenre', icon: indentIcon },
    {path: '/top100', component: Top100, name: 'Top100', icon: rankIcon},
    {path: '/mv', component: Mv, name: 'Mv', icon: videoIcon},
    {path: '/another', component: Another, name: 'Another', icon: podcastIcon, layout: 'another'},
    {path: '/loginPage', component: LoginPage, name: 'Login',icon:loginIcon, layout: 'login'},
]   




const privateRoutes = [
]


export {publicRoutes, privateRoutes}