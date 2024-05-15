import VirinchiLogo from "../../assets/image/virinchi-logo.png";
import { useNavigate } from "react-router-dom";

const Navbar=()=>{
    const navigate =useNavigate();
    const Logout = () =>{
        localStorage.removeItem('isLogin');
        navigate('/Login');
    }
   
    return(
        <div className="header">
      <div className="vi-flex-container">
        <div style={{flexGrow: '20'}}>
          <h2>
            <img src={VirinchiLogo} style={{width: "100px"}}/>
          </h2>
        </div>
        <div style={{flexGrow: '0.5'}}>
          <button 
            type="button"
            onClick={Logout}
            className="btn btn-danger"
            >Logout</button>
        </div>
      </div>
    </div>
    );
}
export default Navbar;