import React from 'react';
import "./showcard.css";

function ShowCard({ title, description, emoji, category }) {
  console.log(title, description, emoji, category);

  function titleCase(str) {
    if (!str) return ''; 
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

 function deletenote(index){
let savednotes=JSON.parse(localStorage.getItem("notes"));
savednotes.splice(index,1)
localStorage.setItem("notes",JSON.stringify(savednotes))
window.location.reload()

}
  return (
    <div className='showcard-body'>
      <div className='show-main-container'>
        <div className="show-card-container">
          <div className='show-div-1'>
            <h2 className='show-emoji'>{emoji}</h2>
          </div>
          <div className='show-div-2'>
            <h3>{titleCase(title)}</h3>
            <p>{titleCase(description)}</p>
            <p className='show-category'>{titleCase(category)}</p>
            <img src='https://cdn-icons-png.flaticon.com/128/3221/3221897.png' className='show-delete' onClick={deletenote}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCard;
