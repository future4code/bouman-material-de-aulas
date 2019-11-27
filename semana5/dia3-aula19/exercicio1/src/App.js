import React from "react";
import VideoGridItem from "./components/VideoGridItem/VideoGridItem.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <VideoGridItem
        texto="Título 1"
        imagem="https://i.pinimg.com/originals/de/f6/96/def69643889ee29e232637646e839064.jpg"
      />
    </div>
  );
}

export default App;
