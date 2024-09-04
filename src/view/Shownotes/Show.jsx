import React, { useEffect, useState } from 'react';
import "./show.css";
import ShowCard from "../../components/noteshowcard/showcard";
import Navbar from '../../components/navbar/nav';
import Footer from '../../components/footer/footer';

function Show() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  
  return (
    <div>
      <Navbar />
   {
     notes.map((item, index) => (
       <ShowCard key={index} title={item.title} description={item.description} emoji={item.emoji} category={item.category} />
     ))
   }
      <Footer />
    </div>
  );
}

export default Show;
