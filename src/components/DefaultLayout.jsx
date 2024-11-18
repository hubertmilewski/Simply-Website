import {Link ,Outlet, Navigate} from "react-router-dom";
import Header from "../views/Header.jsx";
import Footer from "../views/Footer.jsx";

export default function DefaultLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}