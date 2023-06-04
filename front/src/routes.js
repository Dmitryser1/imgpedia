import Album from "./pages/album/Album"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Moder from "./pages/moder/Moder"
import Profile from "./pages/profile/Profile"
import Register from "./pages/register/Register"
import { ALBUM_ROUTE, HOME_ROUTE, LOGIN_ROUTE, MODER_ROUTE, PROFILE_ROUTE, REGISTER_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: MODER_ROUTE + '/:id',
        Component: Moder
    },
    {
        path: PROFILE_ROUTE + '/:id',
        Component: Profile
    },
    {
        path: ALBUM_ROUTE + '/:id',
        Component: Album
    },
    {
        path: HOME_ROUTE,
        Component: Home
    }

]

export const publicRoutes = [
    {
        path: REGISTER_ROUTE,
        Component: Register
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
]