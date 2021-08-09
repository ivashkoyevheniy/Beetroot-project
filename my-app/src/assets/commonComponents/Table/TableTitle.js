import { iconCreator } from "../../../utils";

export const TableTitle = ({ name, quantity, addQuantity, icon, toggler, quantityToggler }) => {
  return (
    <div className="table-title">
      <span className="table-title-text">{(name)}</span>
      <div className="table-quantity-container">
      <span className="table-quantity">{(quantity)}</span>
      {quantityToggler && <span className="table-quantity">{(addQuantity)}</span>}
      </div>
      {toggler && <span className='icon-container icon-container--nav'>{iconCreator(icon)}</span>}
    </div>
  );
};
