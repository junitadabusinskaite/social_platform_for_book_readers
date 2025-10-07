import Navbar from "./Navbar"
import BookBox from "./BookBox"
import { Link } from "react-router-dom"

const ReaderFavorites = () => {
  return (
    <><Navbar /><div>
      <Link to="../readerprofile" className="text-black p-4">← go back to reader456's profile</Link>
      <div className="container">
        <div>
          <BookBox image="book2.jpg" bookName="T.J. Clune - The House in the Cerulean Sea" userName="hello123" link="../profile" />
          <BookBox image="book3.jpg" bookName="Ana Huang - Twisted Series" userName="user123" link="../userprofile" />
          <BookBox image="book4.jpg" bookName="J.K. Rowling - Harry Potter" userName="hello123" link="../profile" />
          <BookBox text="No mourners, no funerals" bookName="Leigh Bardugo - Six of Crows" userName="hello123" llink="../profile" />
        </div>
      </div>
    </div></>
  )
}

export default ReaderFavorites