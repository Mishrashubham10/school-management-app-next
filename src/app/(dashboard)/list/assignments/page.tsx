import FormModal from '@/components/FormModal';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import { assignmentsData, role } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

type Assignment = {
  id: number;
  subject: string;
  class: string;
  teacher: number;
  dueDate: number;
};

const columns = [
  {
    header: 'Subject Name',
    accessor: 'name',
  },
  {
    header: 'Class',
    accessor: 'class',
  },
  {
    header: 'Teacher',
    accessor: 'teacher',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Due Date',
    accessor: 'dueDate',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
];

export default function ExamList() {
  const renderRow = (items: Assignment) => (
    <tr
      key={items.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-shubhPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{items.subject}</td>
      <td>{items.class}</td>
      <td className="hidden md:table-cell">{items.teacher}</td>
      <td className="hidden md:table-cell">{items.dueDate}</td>
      <td>
        <div className="flex items-center gap-2">
          {/* LINK BUTTON */}
          <FormModal table="assignment" type="update" id={items.id} data={items} />
          {/* BUTTON */}
          {role === 'admin' && (
            <FormModal table="assignment" type="delete" id={items.id} />
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Assignments</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            {/* FIRST */}
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-shubhYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            {/* SECOND */}
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-shubhYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {/* THIRD */}
            {role === 'admin' && (
              <FormModal table="assignment" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <div className="">
        <Table columns={columns} renderRow={renderRow} data={assignmentsData} />
      </div>
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
}