import "./leftBar.scss"
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events  from "../../assets/6.png";
import Gamming from "../../assets/7.png";
import Gallaery from "../../assets/8.png";
import Vedios from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


const LeftBar = () => {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
          <img src={currentUser.profilePic} alt=""/>
          <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt=""/>
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt=""/>
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt=""/>
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Memories} alt=""/>
            <span>Memories</span>
          </div>
          <hr/>
          <div className="menu">
            <span>Your Shortcuts</span>
            <div className="item">
              <img src={Events} alt=""/>
              <span>Events</span>
            </div>
            <div className="item">
              <img src={Gamming} alt=""/>
              <span>Gamming</span>
            </div>
            <div className="item">
              <img src={Gallaery} alt=""/>
              <span>Gallaery</span>
            </div>
            <div className="item">
              <img src={Messages} alt=""/>
              <span>Messages</span>
            </div>
          </div>
          <hr/>
          <div className="menu">
            <span>Others</span>
            <div className="item">
              <img src={Tutorials} alt=""/>
              <span>Tutorials</span>
            </div>
            <div className="item">
              <img src={Courses} alt=""/>
              <span>Courses</span>
            </div>
            <div className="item">
              <img src={Fund} alt=""/>
              <span>Fund</span>
            </div>
            <div className="item">
              <img src={Vedios} alt=""/>
              <span>Vedios</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar
