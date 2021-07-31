import { iconCreator } from "../../../utils";

export const TableTitle = ({ name, quantity, icon, toggler }) => {
  return (
    <h3 className="table-title">
      {name}
      <span className="table-quantity">({(quantity)})</span>
      {toggler && <span className='icon-container icon-container--nav'>{iconCreator(icon)}</span>}
    </h3>
  );
};
