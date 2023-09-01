import { useEffect, useState } from "react";



const SaveButton = ({ data, handleSavedMovie, isLiked, unLikeMovie }) => {
  const [savedButtonClick, setSavedButtonClick] = useState(isLiked(data));

  useEffect(() => {
    setSavedButtonClick(isLiked(data))
  }, [isLiked, data])

  const savedMovie = () => {
    if (savedButtonClick) {
      setSavedButtonClick(false);
      unLikeMovie(data);
    } else {
      handleSavedMovie(data);
      setSavedButtonClick(true);
    }
  };

  return (
    <button
      aria-label="кнопка нравится."
      className={`saveButton ${savedButtonClick ? "saveButton_clicked" : ""}`}
      type="button"
      onClick={savedMovie}
    />
  );
};

export default SaveButton;
