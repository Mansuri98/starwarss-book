import React, { useRef } from "react";
import themeSong from "../../assets/audio/Theme_Song.mp3";
import "./MainPage.css";

const MainPage = ({ onEnterClick }: { onEnterClick: () => void }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  return (
    <div className="Main">
      <audio ref={audioRef} src={themeSong} hidden />
      <button onClick={playAudio}>Play Theme Song</button>
      <button onClick={onEnterClick}>Enter the Star Wars Archives</button>
    </div>
  );
};

export default MainPage;
