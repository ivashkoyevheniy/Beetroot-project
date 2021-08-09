import { useState, useEffect } from "react";
import { usersData } from "../../utils/fakeData";
import { v4 as uuidv4 } from "uuid";
import { iconCreator } from "../../utils";
import moreIcon from "../../assets/img/more-icon.svg";
import userOfflineIcon from "../../assets/img/left-time-icon.svg";
import userOnlineIcon from "../../assets/img/user-online-icon.svg";
import "./Users.css";

export const UsersComponent = () => {
  const initialData = usersData;
  const [data, setData] = useState(initialData);
  const [value, setValue] = useState("Active first");
  const onHandleChange = (e) => {
    setValue(e.target.value);
    setData(usersData);
  };

  const checkData = (value) => {
    switch (value) {
      case "Not active first":
        const newData = [
          data.filter((i) => !i.isOnline),
          data.filter((i) => i.isOnline),
        ];
        setData(newData.flat());
        break;
      case "Only active":
        setData(data.filter((i) => i.isOnline && i));
        break;
      case "Only not active":
        setData(data.filter((i) => !i.isOnline && i));
        break;
      default:
        setData(usersData);
    }
  };

  useEffect(() => {
    checkData(value);
  }, [value]);

  return (
    <div className="users-container">
      <div className="table-title table-title--big table-title--users">
        <h2>Users ({data.length})</h2>
        <form className="users-sort">
          <label className="users-sort-title" for="sort">Sort:</label>
          <select className="users-select" name="sort" id="sort" onChange={onHandleChange}>
            <option value="Active first" defaultValue>
              Active first
            </option>
            <option value="Not active first">Not active first</option>
            <option value="Only active">Only active</option>
            <option value="Only not active">Only not active</option>
          </select>
        </form>
      </div>
      <div className="table-column">
        <table>
          <thead>
            <tr className="table-item table-item--title">
              <th>Name</th>
              <th>Last activity</th>
              <th>Mail</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              const { name, position, isOnline, time, email, phone, avatar } = item;
              return (
                <tr className="table-item table-item--users" key={uuidv4()}>
                  <th class="author-item">
                    <div className="avatar-container--users position-relative">
                      <img src={avatar} alt="avatar" />
                      {isOnline && <span class="position-absolute translate-middle p-2 border border-light rounded-circle">
                        <span class="visually-hidden">New alerts</span>
                      </span>}
                    </div>
                    <div className='author-data'>
                      <h3 className="author-name">{name}</h3>
                      <span className="author-position">{position}</span></div>

                  </th>
                  {isOnline && <th className="users-online">
                  <span className="icon-container--users">
                    {iconCreator(userOnlineIcon)}</span>
                   Online now!</th>}
                   {!isOnline && <th className="users-offline">
                     <span className="icon-container--users">
                   {iconCreator(userOfflineIcon)}</span>
                    {time}</th>}
                  <th>{email}</th>
                  <th>{phone}</th>
                  <th className="users-more-container">
                    <button className="item-more item-more--users" >{iconCreator(moreIcon)}</button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item disabled">
            <button class="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          <li class="page-item active"><button class="page-link">1</button></li>
          <li class="page-item"><button class="page-link">2</button></li>
          <li class="page-item"><button class="page-link">3</button></li>
          <li class="page-item"><button class="page-link">4</button></li>
          <li class="page-item"><button class="page-link">5</button></li>
          <li class="page-item">
            <button class="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
