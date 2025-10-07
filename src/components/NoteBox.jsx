import { Link } from "react-router-dom"

const NoteBox = ({ section, text, link }) => {
  return (
    <div className="box">
      <div className="sticky-note">
        <h5>          
          {link ? (<Link to={link} className="note-link text-black text-decoration-none">{section}</Link>
            ) : (
              section
            )
          }
        </h5>
        {Array.isArray(text) ? (
          <ul>{text.map((item, index) => (<li key={index}>{item}</li>))}</ul>
          ) : (
            <p>{text}</p>
          )
        }
      </div>
    </div>
  )
}

export default NoteBox