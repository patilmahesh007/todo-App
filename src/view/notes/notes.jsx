import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/nav";
import { Link } from "react-router-dom"; 
import "./notes.css";
import Notecard from "../../components/notescard/notecard";
import notedata  from "../../config/notecard"; 

function Notes() {
  return (
    <>
      <div className="main-container">
        <p className="quick-notes">Quick Notes</p>
      </div>
      <div className="notes-list">
        {notedata.map((item, index) => (
          <Notecard key={index} img={item.image} description={item.description} />
        ))}
      </div>
      <div className="button-container">
        <Link to="/Add">
          <button className="notes-btn">Add notes</button>
        </Link>
        <Link to="/Show">
          <button className="notes-btn">Show notes</button>
        </Link>
      </div>

      <Footer />
    </>
  );
} 

export default Notes;
