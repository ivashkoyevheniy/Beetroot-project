import moreIcon from "../../img/more-icon.svg";
import { iconCreator } from "../../../utils";
import { TableItemDescription } from ".";

export const TableItem = ({ data }) => {
  const { title, description, isCompleted, inTime } = data;
  return (
    <li className="table-item">
      <div className="item-logo">
        {title.charAt(0)}
      </div>
      <div className='item-content'>
        <div className="item-title">
          {title}
        </div>
        <TableItemDescription description={description} isCompleted={isCompleted} inTime={inTime} />
      </div>
      <button className='item-more'>
        {iconCreator(moreIcon)}
      </button>
    </li>
  );
};
