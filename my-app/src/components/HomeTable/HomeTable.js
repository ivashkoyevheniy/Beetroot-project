import { TableBody, TableTitle } from "../../assets/commonComponents";
import { homePageMessages, homePageTasks } from "../../utils/fakeData";
import { v4 as uuidv4 } from 'uuid';
export const HomeTable = () => {
  return (
    <div className="home-table">
      <div className="home-table-body">
        <TableTitle name="Tasks" />
        <TableBody key={uuidv4()} data={homePageTasks} />
      </div>
      <div className="home-table-body">
        <TableTitle name="Messages" />
        <TableBody key={uuidv4()} data={homePageMessages} />
      </div>
    </div>
  );
};
