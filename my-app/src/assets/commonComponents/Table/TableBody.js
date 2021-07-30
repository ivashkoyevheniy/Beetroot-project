import { TableItem } from "./TableItem";

export const TableBody = ({ data }) => {
  return (
    <ul className='table-list'>
      {data.map((el) => (
        <TableItem key={el.title} data={el} />
      ))}
    </ul>
  );
};
