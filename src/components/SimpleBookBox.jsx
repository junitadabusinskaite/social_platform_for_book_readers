import { useState } from "react"

const SimpleBookBox = ({ image, bookName, text }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div className="box" tabIndex="0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)} 
      style={{cursor: "pointer" }}
    >
      {/*Image or Sticky Note */}
      {image ? (
        <img src={image} rel="preload" alt={bookName} className="img-fluid w-100" />
      ) : (
        <div className="sticky-note">
          <p>{text}</p>
        </div>
      )}
        
      {/*Overlay on Hover */}
      {isHovered && (
        <div className="overlay">
          <div className="text-white fw-bold">{bookName}</div>
        </div>
      )}
    </div>
  )
}

export default SimpleBookBox