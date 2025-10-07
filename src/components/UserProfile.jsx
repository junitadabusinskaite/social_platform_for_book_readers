import Navbar from "./Navbar"
import NoteBox from "./NoteBox"
import { useState } from "react"
import { Link } from "react-router-dom"

const UserProfile = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };
  
  return (
    <><Navbar /><div>
      <div className="profile-wrapper d-flex justify-content-center align-items-center">
        <div className="profile-container d-flex align-items-center p-3">
        <img src="./user123.jpg" alt="UserProfile" className="profile-photo rounded-circle" />
          <div className="profile-info flex-grow-1">
            <h5 className="mb-lg-3">@user123</h5>
            <div className="d-flex gap-2">
              <button className="btn btn-primary py-1" onClick={handleFollowClick}>
                {isFollowing ? "Following" : "Follow"}
              </button>
              <button className="btn btn-primary py-1"><Link to='../privatechat' className="text-white text-decoration-none">Message</Link></button>
            </div>
          </div>
        </div>
      </div>
        
      <div className="container">
        <div>
          <NoteBox section="Favorite Authors" text={["Frank Herbert", "Stephanie Garber", "Juno Dawson", "Suzzane Collins", "Adam Silvera", "Chloe Walsh", "Liz Tomforde"]}/>
          <NoteBox section="Favorite Genres" text={["Crime", "Romantasy", "Dystopian"]}/>
          <NoteBox section="Favorite Quote" text="“That’s what love is. It’s giving everything without expecting anything in return. It’s sacrificing your heart and happiness for someone else and it’s owning all of your mistakes and trying to make them right. Not because you expect to get something in return for it. But because the person you love needs to know how you feel”" />
          <NoteBox section="Uploads →" link="../useruploads"/>
        </div>
      </div>
    </div></>
  )
}
  
export default UserProfile