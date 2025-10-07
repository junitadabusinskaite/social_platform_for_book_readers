import Navbar from "./Navbar"
import NoteBox from "./NoteBox"
import React, { useState } from "react"
import { Link } from 'react-router-dom'

const ReaderProfile = () => {
  const user = {
    socialMedia: [
      "Goodreads: Reader456",
      "Instagram: reader456"
    ]
  } 

  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };
  
  return (
    <><Navbar /><div>
      <div className="profile-wrapper d-flex justify-content-center align-items-center">
        <div className="profile-container d-flex align-items-center p-3">
          <img src="./reader456.jpg" alt="ReaderProfile" className="profile-photo rounded-circle" />
          <div className="profile-info flex-grow-1">
            <h5 className="mb-lg-3">@reader456</h5>
            <div className="d-flex gap-2">
              <button className="btn btn-primary py-1" onClick={handleFollowClick}>
                {isFollowing ? "Following" : "Follow"}
              </button>
              <button className="btn btn-primary py-1"><Link to='../privatechat' className="text-white text-decoration-none">Message</Link></button>
            </div>
          </div>
          <div className="social-media mt-sm-2">
            <h6 className="mb-1">Social Media</h6>
            {user.socialMedia.map((item, index) => (
              <p key={index} className="mb-0">{item}</p>
            ))}
          </div>
        </div>
      </div>
        
      <div className="container">
        <div>
          <NoteBox section="Favorite Authors" text={["Richelle Mead", "Sarah A. Parker", "RuNyx", "Emily Henry", "Callie Hart"]}/>
          <NoteBox section="Favorite Genres" text={["Thriller", "Horror", "Romance", "Contemporary"]}/>
          <NoteBox section="Favored →" link="../readerfavorites"/>
          <NoteBox section="Favorite Books" text={["Once Upon a Broken Heart", "Redeeming 6", "Loveboat, Taipei", "Rook & Rebel", "Quicksilver"]}/>
          <NoteBox section="Favorite Quote" text="“I believe there are far more possibilities than happily ever after or tragedy. Every story has the potential for infinite endings. Hope is a difficult thing to kill, just a spark of it can start a fire. I don't know if I can fix your broken heart, but you can take mine bcause it's already yours”" />
          <NoteBox section="Uploads →" link="../readeruploads"/>
        </div>
      </div>
    </div></>
  )
}
  
export default ReaderProfile