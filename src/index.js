import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notes from './view/notes/notes';
import Show from './view/Shownotes/Show';
import Add from './view/Addnotes/Add';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Notes />} />
      <Route path="/Add" element={<Add />} />
      <Route path="/Show" element={<Show />} />
    </Routes>
  </BrowserRouter>
);
