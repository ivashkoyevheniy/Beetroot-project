import { TableTitle, TableBody } from "../../assets/commonComponents/Table";
import { dataInCompleted, dataInProgress, dataToDo } from "../../utils/fakeData";
import './workflowTable.css';

export const WorkflowTable = () => {
  return (
    <div className='workflow-table'>
      <div className="table">
        <TableTitle name="Todo" quantity={dataToDo.length} />
        <TableBody data={dataToDo} />
      </div>
      <div className="table">
        <TableTitle name="inProgress" quantity={dataInProgress.length} />
        <TableBody data={dataInProgress} />
      </div>
      <div className="table">
        <TableTitle name="Completed" quantity={dataInCompleted.length} />
        <TableBody data={dataInCompleted} />
      </div>
    </div>
  );
};
