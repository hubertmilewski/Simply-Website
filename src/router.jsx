import {createBrowserRouter} from "react-router-dom";
import Home from "./views/Home.jsx";
import About from "./views/About.jsx";
import Oferts from "./views/Oferts.jsx";
import Opinions from "./views/Opinions.jsx";
import Contact from "./views/Contact.jsx";
import NotFound from "./views/NotFound.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
import { Navigate } from "react-router-dom";


const router = createBrowserRouter( [
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to="/home" />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/oferts',
                element: <Oferts />
            },
            {
                path: '/opinions',
                element: <Opinions />
            },
            {
                path: '/contact',
                element: <Contact />
            },
        ]
    },
    {
        path: '/*',
        element: <NotFound />
    }
])

export default router;