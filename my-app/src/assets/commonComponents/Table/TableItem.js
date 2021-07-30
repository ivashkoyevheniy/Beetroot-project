export const TableItem = ({ data }) => {
  const { name, title, description } = data;

  return (
    <li className="table-item">
      <p className="item-name">{name}</p>
      <h4 className="item-title">{title}</h4>
      <p className="item-description">{description}</p>
    </li>
  );
};
