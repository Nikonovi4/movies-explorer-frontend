const BlockHeader = ({ blockName }) => {
  return (
    <>
      <h2 className="blockHeader__title">{blockName}</h2>
      <hr className="blockHeader__line" />
    </>
  );
};

export default BlockHeader;
