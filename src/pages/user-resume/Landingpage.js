import Review from "../../assets/image/review .jpg";
import Resume from "../../assets/image/resume.png";
import Template from "../../assets/image/templetes.png";
import { BrowserRouter, Link } from "react-router-dom/dist";
import Navbar from "../resume_builder/navbar";
import Footer from "../resume_builder/Footer";
// import Footer from "../resume_builder/Footer";
const LandingPage =() =>{
    return(
        <>  
        {/* <BrowserRouter> */}
    {/* <div class="header">
        <Navbar />
    </div> */}
            {/* main body start from here */}
            <div class="par">
                <h1>Welcome TO Resume Builder</h1>
            </div>
            <button class="button1">
                {/* <a href="UserPannel/dashboard.jsp"> <h3>Try Our Resume</h3></a> */}
                <h3><Link to="/resume-maker-add-template">Try Our Resume</Link></h3>
            </button>
            <div class="proj">
                <div class="proj1">
                    <div class="first">
                        {/* <img class="fig1" src="images/review.jpg" style="width: 150px; height: 30px; padding-left: 10px;"> */}
                        <img src={Review} class="fig1" style={{width:"150px", height:"30px", paddingLeft:"10px"}} />
                        <h3>The Prouct Was Great and User-Friendly</h3>
                        <p>The product was great and user friendly. My resume was easy to change and recreat with the different templetes.</p>
                    </div>
                    <div class="second">
                        {/* <img class="fig2" src="images/review.jpg" style="width: 150px; height: 30px; padding-left: 10px;"> */}
                        <img src={Review} class="fig2" style={{width:"150px", height:"30px", paddingLeft:"10px"}} />
                        <h3>They are very helpful with every question I have</h3>
                        <p>Find everthing so eas to use for the resume I was doing.</p>
                    </div>
                    <div class="third">
                        {/* <img class="fig3" src="images/review.jpg" style="width: 150px; height: 30px; padding-left: 10px;"> */}
                        <img src={Review} class="fig3" style={{width:"150px", height:"30px", paddingLeft:"10px"}} />
                        <h3>Experience easy with Resume Builder</h3>
                        <p>The company was honest, they helped me a lot, and the service was great. Building a resume does not seem daunting as it is.</p>
                    </div>
                    {/* <div class="fourth"> */}
                        {/* <img class="fig1" src="images/review.jpg" style="width: 150px; height: 30px; padding-left: 5px;"> */}
                        {/* <h3>Resume services</h3>
                        <p>Good looking resume, great as the customer service too.</p> */}
                    {/* </div> */}
                </div>
            </div>

            <div class="benefits">
                <h1>What are the benefits of using Resume Builder</h1>
            </div>
            <div class="bor">
                <div class="f1">
                    <h3>It's Fast and Easy To use</h3>
                    <p>Our online resume builder will help you to wire a perfect resume with in a minutes. </p>

                </div>
                <div class="f2">
                    <h3>Best Resume Templets</h3>
                    <p>Our templates are all designed by Certified Career Experts</p>
                    <h5> <Link to="/resume-maker/resume"> Select a Resume templetes here</Link>
                        </h5>
                </div>
                <div class="f3">
                    <h3>Follow Tips From Experts</h3>
                    <p>Our experts' tips will show you how to write a resume.</p>
                </div>
            </div>

            <div class="best">
                <h1>Why is the Resume Builder the best website to build your resume?</h1>
            </div>
            <div class="imgsec">
                <div class="left">
                    <h2>Professional Templetes</h2>
                    <p>Choose professional, elegant, creative, or modern resume templates. Resume Builder maker offers you a templates. You can easily change colors and adapt the layout to any resume format you choose: functional, reverse-chronological, or combination.</p>
                </div>
                <div class="right">
                    {/* <img class="res" src="images/resume.png" > */}
                    <img src={Resume} class="res" />
                </div>
            </div>

            <div class="tips">
                <div class="one">
                    {/* <img class="tem" src="images/templetes.png"> */}
                    <img src={Template} class="tem" />
                </div>
                <div class="two">
                    <h2>Tips From Recruiters </h2>
                    <p> You no longer have to worry about how to create documents for your job application. Our builder will guide you through the process, step-by-step. Every writing tip comes from Certified Career Experts experienced in helping someone like you get more job offers. </p>
                </div>
            </div>

            <div class="faq" id="app1">
                <h1>Frquently Ask Question About Resume Builer and Website.</h1>
            </div>
            <div class="faqpar">
                <h3>Why is Resume Builder the best website to prepare a job application?</h3>
                <ul class="uli">
                    <li class="lis">Feature-rich Resume Builder with professional resume templates for any job.</li>
                    <li class="lis">CV maker with professional CV templates for academic applications.</li>
                    <li class="lis">A resume upload feature to update your old resume instead of starting from scratch.</li>
                    <li class="lis">A resume upload feature to update your old resume instead of starting from scratch.</li>
                </ul>
                <h3>How do I use  Resume Builder effectively?</h3>
                <ul class="uli">
                    <li class="lis">Feature-rich Resume Builder with professional resume templates for any job.</li>
                    <li class="lis">CV maker with professional CV templates for academic applications.</li>
                    <li class="lis">A resume upload feature to update your old resume instead of starting from scratch.</li>
                    <li class="lis">A resume upload feature to update your old resume instead of starting from scratch.</li>
                </ul>
            </div>
            {/* </BrowserRouter>   */}
            {/* main body ends here */}
            {/* <div class="footer">
        <Footer />
    </div> */}

        </>
    );

}
export default LandingPage; 