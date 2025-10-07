import { useState, useRef, useEffect } from "react"
import { BsHeart, BsHeartFill } from "react-icons/bs"
import { Link } from "react-router-dom"

const BookBox = ({ image, bookName, userName, link, text }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)
  const boxRef = useRef(null)

  useEffect(() => {
    const handleFocus = () => setIsHovered(true)
    const handleBlur = (e) => {
      if (!boxRef.current.contains(e.relatedTarget)) {
        setIsHovered(false)
      }
    };

    const node = boxRef.current
    node.addEventListener("focusin", handleFocus)
    node.addEventListener("focusout", handleBlur)

    return () => {
      node.removeEventListener("focusin", handleFocus)
      node.removeEventListener("focusout", handleBlur)
    }
  }, [])

  const toggleFavorite = () => setIsFavorited(!isFavorited)

  return (
    <div ref={boxRef} className="box" tabIndex="0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: "pointer", position: "relative" }}
    >
      {/* Image or Sticky Note */}
      {image ? (
        <img src={image} rel="preload" alt={bookName} className="img-fluid w-100" />
      ) : (
        <div className="sticky-note">
          <p>{text}</p>
        </div>
      )}

      {/* Overlay */}
      <div className={`overlay ${isHovered ? "visible" : "invisible"}`}>
        <div className="text-white fw-bold">{bookName}</div>
        <div className="d-flex justify-content-between align-items-center">
          <Link to={link} className="text-white text-decoration-none" tabIndex={isHovered ? 0 : -1}>
            {userName}
          </Link>
          <button onClick={toggleFavorite} className="btn p-0 ms-2"
            aria-label={isFavorited ? "Unfavorite" : "Favorite"}
            style={{ background: "none", border: "none", position: "absolute", right: "10px", bottom: "10px"}}
            tabIndex={isHovered ? 0 : -1}
          >
            {isFavorited ? (
              <BsHeartFill size={24} color="red" />
            ) : (
              <BsHeart size={24} color="white" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookBox