import moreIcon from "../../img/more-icon.svg";
import { iconCreator } from "../../../utils";
import { TableItemDescription } from ".";

export const TableItem = ({ data, type }) => {
  const { title, description, isCompleted, inTime, comment, time, avatar, name, isReaded, activity, project } = data;

  if (type === "homeTasks" || type === "workflow") {
    return (
      <li className="table-item table-item--tasks">
        <div className="item-logo">
          {title && title[0]}
        </div>
        <div className='item-content'>
          <div className="item-title">
            {title}
          </div>
          <TableItemDescription description={description} inTime={inTime} title={title} />
        </div>
        <button className='item-more'>
          {iconCreator(moreIcon)}
        </button>
      </li>
    );
  }
  if (type === "messages") {
    if (!isReaded) {
      return (
        <li className="table-item table-item--new-messages">
          <div className="avatar-container">
            <img className="avatar-image" alt="avatar" src={avatar}></img>
          </div>
          <div className='item-content'>
            <div className="item-title title--small">
              {name}
            </div>
            <div className="item-comment">
              {comment}
            </div>
            <TableItemDescription comment={comment} />
          </div>
        </li>
      );
    }
    else return (
      <li className="table-item table-item--messages">
        <div className="avatar-container">
          <img className="avatar-image" alt="avatar" src={avatar}></img>
        </div>
        <div className='item-content'>
          <div className="item-title title--small">
            {name}
          </div>
          <div className="item-comment">
            {comment}
          </div>
          <TableItemDescription comment={comment} />
        </div>
      </li>
    );
  }
  if (type === "activity") {
    return (
      <li className="table-item table-item--activity">
        <div className="avatar-container">
          <img className="avatar-image" alt="avatar" src={avatar}></img>
        </div>
        <div className='item-content'>
          <div className="item-title title--small">
            {name}
            <span className="item-description">{activity}</span>
            {project}
          </div>
          <div className="item-comment">
            {comment}
          </div>
          <TableItemDescription time={time} />
        </div>
      </li>
    );
  }
  else return (
    <li className="table-item">
      <div className="item-logo">
        {title && title[0]}
      </div>
      <div className='item-content'>
        <div className="item-title">
          {title}
        </div>
        <TableItemDescription description={description} isCompleted={isCompleted} inTime={inTime}/>
      </div>
      <button className='item-more'>
        {iconCreator(moreIcon)}
      </button>
    </li>
  );
};
