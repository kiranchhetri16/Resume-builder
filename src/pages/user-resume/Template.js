import Resume from "../../assets/image/resume.png"
import Templatee from "../../assets/image/templetes.png";
const Template =() =>{
    return(
        <div class="temp-height" style={{width:"80%", height:"100%", backgroundColor:"#fff",display:"flex", margin:"10%"}} > 
            {/* <h1>Welcome to Template pages</h1> */}
            {/* <img src={Resume} class="temp-img" style={{height:"700px", width:"600px", marginLeft:"30%", marginTop:"100px"}} /> */}
            <div class="onetemplate">
                <img src={Resume} 
                // class="temp-img" 
                style={{height:"800px", width:"100%", margin:"0"}} />
            </div>
            <div class="twotemplate">
                <img src={Templatee} style={{height:"800px", width:"100%", margin:"0"}} />
            </div>

        </div>
    );
}
export default Template;