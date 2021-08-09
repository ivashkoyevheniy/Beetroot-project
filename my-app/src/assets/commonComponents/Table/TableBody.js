import { TableItem } from "./TableItem";
import { v4 as uuidv4 } from 'uuid';

export const TableBody = ({ data, toogler,  }) => {
  return (
    <ul className='table-list'>
      {data.map((el) => (
        <TableItem toggler={toogler} key={uuidv4()} data={el} />
      ))}
    </ul>
  );
};
