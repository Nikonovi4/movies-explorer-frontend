const DeleteButton = ({ data, handleDeleteMovie }) => {
 
  const deleteMovie = () => {
    handleDeleteMovie(data);
 }

  return (
    <button
      aria-label="кнопка нравится."
      className="deleteButton"
      type="button"
      onClick={deleteMovie}
    />
  );
};

export default DeleteButton;
