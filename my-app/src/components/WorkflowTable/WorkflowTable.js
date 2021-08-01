import { TableTitle, TableBody } from "../../assets/commonComponents/Table";
import { tasks } from "../../utils/fakeData";
import './workflowTable.css';

const dataToDo = tasks.filter(task => task.status === 'toDo')
const dataInProgress = tasks.filter(task => task.status === 'inProgress')
const dataInCompleted = tasks.filter(task => task.status === 'completed')

function changeStatus(id, status) {
  const taskIndex = tasks.findIndex(task => task.id === id)
  tasks[taskIndex].status = status
}
function addTask(data) {
  let maxID = tasks.reduce((maxID, task) => {
    return Math.max(maxID, task.id);
}, 0)

const newTask =
    {
      ...data, 
      id: ++maxID,
      inTime: true,
      status: 'toDo'
  }
  tasks.push(newTask)
}

function removeTask(id) {
  const taskIndex = tasks.findIndex(task => task.id === id)
  tasks.splice(taskIndex,1);
}

export const WorkflowTable = () => {
  return (
    <div className='workflow-table'>
      <div className="table">
        <TableTitle name="To Do" quantity={dataToDo.length} />
        <TableBody data={dataToDo} />
      </div>
      <div className="table">
        <TableTitle name="in Progress" quantity={dataInProgress.length} />
        <TableBody data={dataInProgress} />
      </div>
      <div className="table">
        <TableTitle name="Completed" quantity={dataInCompleted.length} />
        <TableBody data={dataInCompleted} />
      </div>
    </div>
  );
};
