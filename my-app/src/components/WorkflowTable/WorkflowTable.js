import { TableTitle, TableBody } from "../../assets/commonComponents/Table";
import { dataInCompleted, dataInProgress, dataToDo } from "../../utils/fakeData";
import { v4 as uuidv4 } from 'uuid';
import './workflowTable.css';

export const WorkflowTable = () => {
  return (
    <div className='workflow-table'>
      <div className="table">
        <TableTitle name="To Do" quantity={dataToDo.length} />
        <TableBody type="workflow" key={uuidv4()} data={dataToDo} />
      </div>
      <div className="table">
        <TableTitle name="in Progress" quantity={dataInProgress.length} />
        <TableBody type="workflow" key={uuidv4()} data={dataInProgress} />
      </div>
      <div className="table">
        <TableTitle name="Completed" quantity={dataInCompleted.length} />
        <TableBody type="workflow" key={uuidv4()} data={dataInCompleted} />
      </div>
    </div>
  );
};
