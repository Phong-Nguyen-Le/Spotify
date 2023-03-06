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

const publicRoutes = [
    {path: '/', component: Home, name:'Home'},
    {path: '/discover', component: Discover, name: 'Discover'},
    {path: '/hotnews', component: Hotnews, name:'Hot News'},
    {path: '/loginPage', component: LoginPage, name: 'Login', layout: 'login'},
    {path: '/another', component: Another, name: 'Another'},
    // new
    {path: '/newsong', component: NewSong, name: 'NewSong'},
    {path: '/musicgenre', component: MusicGenre, name: 'MusicGenre'},
    {path: '/top100', component: Top100, name: 'Top100'},
    {path: '/mv', component: Mv, name: 'Mv'},
]   

const icon1 = <i class="fa-solid fa-house"></i>
const icon2 = <i class="fa-solid fa-magnifying-glass"></i>
const icon3 = <i class="fa-solid fa-newspaper"></i>
const icon4 = <i class="fa-solid fa-person"></i>


const privateRoutes = [
]


export {publicRoutes, privateRoutes}