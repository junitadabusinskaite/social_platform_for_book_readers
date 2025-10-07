import Navbar from "./Navbar"
import BookBox from "./BookBox"
import { Link } from "react-router-dom"

const UserUploads = () => {
  return (
    <><Navbar /><div>
      <Link to="../userprofile" className="text-black p-4">← go back to user123's profile</Link>
      <div className="container">
        <div>
          <BookBox image="book1.jpg" bookName="Rebecca Yarros - Fourth Wing" userName="user123" />
          <BookBox image="book3.jpg" bookName="Ana Huang - Twisted Series" userName="user123" />
          <BookBox image="book5.jpg" bookName="Leigh Bardugo - Six of Crows" userName="user123" />
          <BookBox image="book6.jpg" bookName="Rachel Gillig - One Dark Window" userName="user123" />
        </div>
      </div>
    </div></>
  )
}
  
export default UserUploads