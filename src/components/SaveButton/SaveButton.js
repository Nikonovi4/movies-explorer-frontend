import { useState } from "react";

const SaveButton = () => {
  const [isSavedMovie, setSavedMovie] = useState(false);
  const savedMovie = () => {
    isSavedMovie ? setSavedMovie(false) : setSavedMovie(true);
  };

  return (
    <button
      aria-label="кнопка нравится."
      className={`saveButton ${
        isSavedMovie ? "saveButton_clicked" : ""
      }`}
      type="button"
      onClick={savedMovie}
    />
  );
};

export default SaveButton;
