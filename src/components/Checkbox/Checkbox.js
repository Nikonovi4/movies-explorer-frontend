
const Checkbox = ({
  setCheckedCheckbox,
  checkedCheckbox,
}) => {

  return (
    <label className="switch">
      <input
        type="checkbox"
        defaultChecked={checkedCheckbox}
        onChange={() => {
          setCheckedCheckbox((state) => !state);
        }}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default Checkbox;
