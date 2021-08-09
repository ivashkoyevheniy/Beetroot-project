import moreIcon from "../../img/more-icon.svg";
import { iconCreator } from "../../../utils";
import { TableItemDescription } from ".";

export const TableItem = ({ data, toggler }) => {
  const { title, description, isCompleted, inTime, isReaded, time } = data;
  return (
    <li className="table-item">
      <div className="item-logo">
        {title && title[0]}
      </div>
      <div className='item-content'>
        <div className="item-title">
          {title}
        </div>
        <TableItemDescription description={description} isCompleted={isCompleted} inTime={inTime} isReaded={isReaded} time={time} />
      </div>
      {!toggler && <button className='item-more'>
        {iconCreator(moreIcon)}
      </button>}
    </li>
  );
};
