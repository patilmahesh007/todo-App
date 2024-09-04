import React, { useState } from 'react';
import "./Add.css";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/nav";
import { Toaster, toast } from 'react-hot-toast';
import EmojiPicker from 'emoji-picker-react';

function Add() {
  const [title, setAdd] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [emoji, setEmoji] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const addNote = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    const noteObject = {
      title,
      description,
      category,
      emoji,
    };

    notes.push(noteObject);
    localStorage.setItem('notes', JSON.stringify(notes));

    toast.success("Note added successfully!");

    console.log("Note added:", noteObject);

    setAdd("");
    setDescription("");
    setCategory("");
    setEmoji("");
  };

  const handleEmojiClick = (emojiObject) => {
    setEmoji(emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <>
      <Navbar />
      <Toaster position="top-right" reverseOrder={false} />
      <p className='Note-title'>Add Notes</p>
      <div className="input-container">
        <input
          className="inputbox"
          placeholder="Title"
          value={title}
          onChange={(e) => setAdd(e.target.value)}
          required
        />
        <input
          className="inputbox"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />


        <select
          className="inputbox"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>Select Category</option>
          <option value="shopping">Shopping</option>
          <option value="personal">Personal</option>
          <option value="learning">Learning</option>
          <option value="eating">Eating</option>
        </select>
        <input
          className="inputbox"
          placeholder="Select an Emoji"
          value={emoji}
          readOnly
          required
        />
        {showEmojiPicker && (
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        )}


        <div >  <button  className="clear-btn" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>Select Emoji</button>
          <button className="clear-btn" onClick={addNote}>Add Notes</button></div>
      </div>
      <Footer />
    </>
  );
}

export default Add;
