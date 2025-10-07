import Navbar from "./Navbar"
import BookBox from "./BookBox"
import { Link } from "react-router-dom"

const ReaderUploads = () => {
  return (
    <><Navbar /><div>
      <Link to="../readerprofile" className="text-black p-4">← go back to reader456's profile</Link>
      <div className="container">
        <div>
          <BookBox text="All the stories are true" bookName="Cassandra Clare - City of Bones" userName="reader456" />
          <BookBox text="Destroying things is much easier than making them" bookName="Suzanne Collins - The Hunger Games" userName="reader456" />
          <BookBox text="A dragon without its rider is a tragedy. A rider without their dragon is dead" bookName="Rebecca Yarros - Fourth Wing" userName="reader456" />
          <BookBox image="book7.jpg" bookName="Stephanie Garber - Once Upon A Broken Heart" userName="reader456" />
        </div>
      </div>
    </div></>
  )
}
  
export default ReaderUploads