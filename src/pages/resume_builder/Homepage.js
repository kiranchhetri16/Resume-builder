import Navbar from "./navbar";
import Footer from "./Footer";
import { Link, Outlet } from "react-router-dom/dist";
import LandingPage from "../user-resume/Landingpage";



const Homepage =() =>{
return(
    <>
    <div class="header">
        <Navbar />
    </div>
    <div class="row">
    
        <div class="main-body">
            {/* <LandingPage /> */}

            <Outlet />
        </div>
    </div>
    
    <div class="footer">
        <Footer />
    </div>

    </>

);
}
export default Homepage;