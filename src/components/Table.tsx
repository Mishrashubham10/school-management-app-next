export default function Table({
  columns,
  renderRow,
  data,
}: {
  columns: {
    header: string;
    accessor: string;
    className?: string;
  }[];
  renderRow: (item:any) => React.ReactNode;
  data: any[];
}) {
  return (
    <table className="w-full mt-4">
      {/* --------- TABLE HEAD ---------- */}
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((col) => (
            <th className={col.className} key={col.header}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      {/* --------- TABLE BODY ---------- */}
      <tbody>
        {data.map((item)=>renderRow(item))}
      </tbody>
    </table>
  );
}