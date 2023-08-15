const BlockHeader = ({ blockName }) => {
  return (
    <section>
      <h2 className="blockHeader__title">{blockName}</h2>
      <hr className="blockHeader__line" />
    </section>
  );
};

export default BlockHeader;
