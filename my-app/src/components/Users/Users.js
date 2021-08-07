import { useState, useEffect } from "react";
import { usersData } from "../../utils/fakeData";
import { v4 as uuidv4 } from "uuid";
import arrow from "../../assets/img/button-arrow.svg";
import "./Users.css";

const buttons = [1, 2, 3, 4, 5];
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
    <>
      <div>
        <h2>Users ({data.length})</h2>
        <select onChange={onHandleChange}>
          <option value="Active first" defaultValue>
            Active first
          </option>
          <option value="Not active first">Not active first</option>
          <option value="Only active">Only active</option>
          <option value="Only not active">Only not active</option>
        </select>
      </div>
      <div>
        <table>
          <thead>
            <tr className="table-item">
              <th>Name</th>
              <th>Last activity</th>
              <th>Mail</th>
              <th>Phone</th>
              <th>.</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              const { name, position, isOnline, time, email, phone } = item;
              return (
                <tr className="table-item" key={uuidv4()}>
                  <th>
                    <img src="./" alt="img" />
                    <h3>{name}</h3>
                    <p>{position}</p>
                  </th>
                  <th>{isOnline ? "Online now!" : time}</th>
                  <th>{email}</th>
                  <th>{phone}</th>
                  <th>.</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        {buttons.map((i) => (
          <button key={uuidv4()}>{i}</button>
        ))}
        <button>
          <img src={arrow} alt='arrow'/>
        </button>
      </div>
    </>
  );
};
