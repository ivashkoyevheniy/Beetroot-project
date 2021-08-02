import moreIcon from "../../img/more-icon.svg";
import { iconCreator } from "../../../utils";
import { TableItemDescription } from ".";

export const TableItem = ({ data }) => {
  const {name, title, description, isCompleted, inTime } = data;
  return (
    <li className="table-item">
      <div className="item-logo">
        {title && title[0]}
      </div>
      <div className='item-content'>
        <div className="item-title">
          {title}
        </div>
        <TableItemDescription description={description} isCompleted={isCompleted} inTime={inTime} />
      </div>
      <a href='#' className='item-more'>
        {iconCreator(moreIcon)}
      </a>
    </li>
  );
};
