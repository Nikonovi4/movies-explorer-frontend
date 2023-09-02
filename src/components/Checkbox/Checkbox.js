const Checkbox = ({
  setCheckedCheckbox,
  checkedCheckbox,
  setVisibleCardCount,
  initialCardCount,
}) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        defaultChecked={checkedCheckbox}
        onChange={() => {
          setCheckedCheckbox((state) => !state);
          setVisibleCardCount(initialCardCount);
        }}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default Checkbox;
