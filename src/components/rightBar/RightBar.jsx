import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://crictoday.com/wp-content/uploads/2021/01/rohit-samaira-1601218036-1024x580.jpg"
                alt=""
              />
              <span>Akkira</span>
            </div>
            <div className="buttons">
              <button>Follow Back</button>
              <button>Accept</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>Akkay</span>
            </div>
            <div className="buttons">
              <button>FollowBack</button>
              <button>Accept</button>
            </div>
          </div>
        </div>

        <div className="item"> 
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://crictoday.com/wp-content/uploads/2021/01/rohit-samaira-1601218036-1024x580.jpg"
                alt=""
              />
              <p>
                <span>Akkira </span> You have changed your cover photo
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Akkay</span> changed their cover picture
              </p>
            </div>
            <span>10 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Akkay</span> posted a picture
              </p>
            </div>
            <span>5 min ago</span>
          </div> 
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Akkay</span> add you back as a friend
              </p>
            </div>
            <span>15 min ago</span>
          </div> 
        </div> 
        <div className="item"> 
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Akkay</span>
            </div>
          </div> 
          <div className="user">
            <div className="userInfo">
              <img
                src="https://e0.pxfuel.com/wallpapers/150/884/desktop-wallpaper-park-jimin-purple-hair-ideas-park-jimin-jimin-bts-jimin-jimin-purple-hair-thumbnail.jpg"
                alt=""
              />
              <div className="online" />
              <span>jimin</span>
            </div>
          </div> 
          <div className="user">
            <div className="userInfo">
              <img
                src="https://img-cdn.thepublive.com/fit-in/560x320/filters:format(webp)/ptc-punjabi/media/media_files/uq61lAL1GFOwEuNrfeca.jpg"
                alt=""
              />
              <div className="online" />
              <span>Akki</span>
            </div>
          </div> 
          <div className="user">
            <div className="userInfo">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNzkxOGE0NzgtYzAwYS00NWE4LTk4Y2EtMWE4YTQ0YjVlMTdiXkEyXkFqcGdeQXVyMTU3ODQxNDYz._V1_.jpg"
                alt=""
              />
              <div className="online" />
              <span>group 7</span>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default RightBar;