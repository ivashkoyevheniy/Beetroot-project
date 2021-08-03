import { TableBody, TableTitle } from "../../assets/commonComponents";
import { dataInProgress, dataToDo } from "../../utils/fakeData";
import './HomeTable.css';
import LineChart from "../../assets/commonComponents/Charts/LineChart";
import PieChart from "../../assets/commonComponents/Charts/PieChart";


// import { homePageMessages, homePageTasks } from "../../utils/fakeData";
// import { v4 as uuidv4 } from 'uuid';
export const HomeTable = () => {
  return (
    <div className="home-table">
      <div className="table-title table-title--big">Hello John!</div>
      <div className='home-top-container'>
        <div className='home-top-left-container'><PieChart /></div>
        <div className='home-top-right-container'><LineChart /></div>
      </div>
      <div className='home-bottom-container'>
      <div className="table table-column">
        <TableTitle name="Tasks" />
        <TableBody data={dataInProgress, dataToDo} />
        {/* <TableBody key={uuidv4()} data={homePageTasks} /> */}
      </div>
      <div className="table table-column">
        <TableTitle name="Messages" />
        <TableBody data={dataInProgress} />
      </div>
      <div className="table table-column">
        <TableTitle name="Activity" />
        <TableBody data={dataToDo} />
      </div>
        {/* <TableBody key={uuidv4()} data={homePageMessages} /> */}
      </div>
    </div>
  );
};
