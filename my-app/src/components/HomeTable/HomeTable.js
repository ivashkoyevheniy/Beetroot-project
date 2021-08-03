import { TableBody, TableTitle } from "../../assets/commonComponents";
import { dataInProgress, dataToDo } from "../../utils/fakeData";
import './HomeTable.css';
import LineChart from "../../assets/commonComponents/Charts/LineChart";
import PieChart from "../../assets/commonComponents/Charts/PieChart";


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
      </div>
      <div className="table table-column">
        <TableTitle name="Messages" />
        <TableBody data={dataInProgress} />
      </div>
      <div className="table table-column">
        <TableTitle name="Activity" />
        <TableBody data={dataToDo} />
      </div>
      </div>
    </div>
  );
};
