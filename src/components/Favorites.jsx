import Navbar from "./Navbar"
import BookBox from "./BookBox"

const Favorites = () => {
  return (
    <><Navbar /><div>
      <div className="container">
        <div>
          <BookBox image="book1.jpg" bookName="Rebecca Yarros - Fourth Wing" userName="user123" link="../userprofile"/>
          <BookBox text="All the stories are true" bookName="Cassandra Clare - City of Bones" userName="reader456" link="../readerprofile" />
          <BookBox image="book6.jpg" bookName="Rachel Gillig - One Dark Window" userName="user123" link="../userprofile"/>
          <BookBox image="book7.jpg" bookName="Stephanie Garber - Once Upon A Broken Heart" userName="reader456" link="../readerprofile"/>
          <BookBox image="book5.jpg" bookName="Leigh Bardugo - Six of Crows" userName="user123" link="../userprofile"/>
          <BookBox text="A dragon without its rider is a tragedy. A rider without their dragon is dead" bookName="Rebecca Yarros - Fourth Wing" userName="reader456" link="../readerprofile"/>
        </div>
      </div>
    </div></>
  )
}
  
export default Favorites