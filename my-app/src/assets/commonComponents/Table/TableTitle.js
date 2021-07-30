export const TableTitle = ({ name, quantity }) => {
  return (
    <h3 className="table-title">
      {name}
      <span className="table-quantity">({quantity})</span>
    </h3>
  );
};
