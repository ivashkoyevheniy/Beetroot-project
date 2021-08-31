import { TableBody, TableTitle } from "../../assets/commonComponents";
import { dataInProgress, dataToDo, homePageMessages, homePageActivity } from "../../utils/fakeData";
import './HomeTable.css';
import LineChart from "../../assets/commonComponents/Charts/LineChart";
import PieChart from "../../assets/commonComponents/Charts/PieChart";
import { v4 as uuidv4 } from 'uuid';

export const HomeTable = () => {
  const homePageTasks = dataInProgress.concat(dataToDo),
  readedMessages =  homePageMessages.filter(function(array) {
    return array.isReaded === false;
}),
deleyTasks =  homePageTasks.filter(function(array) {
  return array.inTime === false;
});
  return (
    <div className="home-table">
      <div className="table-title table-title--big">Hello John!</div>
      <div className='home-top-container'>
        <div className='home-top-left-container'><PieChart /></div>
        <div className='home-top-right-container'><LineChart /></div>
      </div>
      <div className='home-bottom-container'>
      <div className="table table-column">
        <TableTitle quantityToggler="true" name="Tasks" quantity={homePageTasks.length} addQuantity={deleyTasks.length} />
        <TableBody type="homeTasks" key={uuidv4()} data={homePageTasks} />
      </div>
      <div className="table table-column">
        <TableTitle name="Messages" quantity={readedMessages.length} />
        <TableBody type="messages" key={uuidv4()} data={homePageMessages} />
      </div>
      <div className="table table-column table-column--activity">
        <TableTitle name="Activity" quantity={homePageActivity.length} />
        <TableBody type="activity" key={uuidv4()} data={homePageActivity} />
      </div>
      </div>
    </div>
  );
};
