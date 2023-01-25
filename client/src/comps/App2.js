import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";


export default function App2() {
    return (
        <>
            <Routes>
                <Route element=<Navbar />>
                    <Route path="/" element=<Home/> />
                    <Route path="/home" element=<Home /> />
                    <Route path="/about" element=<About/> />
                    <Route path="/contact" element=<Contact/> />
                </Route>
            </Routes>
        </>
    )

}