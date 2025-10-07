import SimpleBookBox from "./SimpleBookBox"
import SimpleNavbar from "./SimpleNavbar"

const LoggedOut = () => {
  return (
    <><SimpleNavbar />
      <div className="container">
        <div>
          <SimpleBookBox image="book1.jpg" bookName="Rebecca Yarros - Fourth Wing" />
          <SimpleBookBox text="All the stories are true" bookName="Cassandra Clare - City of Bones" />
          <SimpleBookBox image="book2.jpg" bookName="T.J. Clune - The House in the Cerulean Sea" />
          <SimpleBookBox image="book3.jpg" bookName="Ana Huang - Twisted Series" />
          <SimpleBookBox text="Destroying things is much easier than making them" bookName="Suzanne Collins - The Hunger Games" />
          <SimpleBookBox image="book4.jpg" bookName="J.K. Rowling - Harry Potter" />
          <SimpleBookBox image="book5.jpg" bookName="Leigh Bardugo - Six of Crows" />
          <SimpleBookBox text="A dragon without its rider is a tragedy. A rider without their dragon is dead" bookName="Rebecca Yarros - Fourth Wing" />
          <SimpleBookBox text="No mourners, no funerals" bookName="Leigh Bardugo - Six of Crows" />
          <SimpleBookBox image="book6.jpg" bookName="Rachel Gillig - One Dark Window" />
          <SimpleBookBox image="book7.jpg" bookName="Stephanie Garber - Once Upon A Broken Heart" />
        </div>
      </div>
    </>
  )
}

export default LoggedOut