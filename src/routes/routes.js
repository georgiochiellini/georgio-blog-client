import { ABOUT_ROUTE, MAIN_ROUTE, PREMIUM_ROUTE, SESSION_ROUTE, SETTINGS_ROUTE } from "./routesPath"
import Main from '../pages/main/Main'
import Profile from '../pages/profile/Profile'
import About from '../pages/about/About'
import Premium from '../pages/premium/Premium'
import Settings from '../pages/settings-page/Settings'
import Session from '../pages/session/Session'


export const authRoutes = [
    {
        path: MAIN_ROUTE,
        Component: <Profile />
    },
    {
        path: ABOUT_ROUTE,
        Component: <About />
    },
    {
        path: SESSION_ROUTE,
        Component: <Session />
    },
    {
        path: PREMIUM_ROUTE,
        Component: <Premium />
    },
    {
        path: SETTINGS_ROUTE,
        Component: <Settings />
    },
]

export const unauthRoutes = [
    {
        path: MAIN_ROUTE,
        Component: <Main />
    },
    {
        path: ABOUT_ROUTE,
        Component: <About />
    }
]