import { usersData } from "../../utils/fakeData";
import { v4 as uuidv4 } from "uuid";
import arrow from "../../assets/img/button-arrow.svg";
import "./Users.css";

const buttons = [1, 2, 3, 4, 5];
export const UsersComponent = () => {
  return (
    <>
      <div>
        <h2>Users ({usersData.length})</h2>
        <select>
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
            {usersData.map((item) => {
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
          <button>{i}</button>
        ))}
        <button>
          <img src={arrow} />
        </button>
      </div>
    </>
  );
};
