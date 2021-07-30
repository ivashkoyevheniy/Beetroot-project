import { TableBody, TableTitle } from "../../assets/commonComponents";
import { homePageMessages, homePageTasks } from "../../utils/fakeData";

export const HomeTable = () => {
  return (
    <div className="home-table">
      <div className="home-table-body">
        <TableTitle name="Tasks" />
        <TableBody data={homePageTasks} />
      </div>
      <div className="home-table-body">
        <TableTitle name="Messages" />
        <TableBody data={homePageMessages} />
      </div>
    </div>
  );
};
