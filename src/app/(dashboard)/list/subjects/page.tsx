import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import { role, subjectsData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

type Subject = {
  id: number;
  name: string;
  teachers: string[];
};

const columns = [
  {
    header: 'Subject Name',
    accessor: 'name',
  },
  {
    header: 'Teachers',
    accessor: 'teachers',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
];

export default function ParentsList() {
  const renderRow = (items: Subject) => (
    <tr
      key={items.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-shubhPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
      {items.name}
      </td>
      <td className="hidden md:table-cell">
      {items.teachers?.join("")}
      </td>
      <td>
        <div className="flex items-center gap-2">
          {/* LINK BUTTON */}
          <Link href={`/list/teachers/${items.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-shubhSky">
              <Image src="/edit.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {/* BUTTON */}
          {role === 'admin' && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-shubhPurple">
              <Image src="/delete.png" alt="" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Subjects</h1>
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
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-shubhYellow">
                <Image src="/plus.png" alt="" width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <div className="">
        <Table columns={columns} renderRow={renderRow} data={subjectsData} />
      </div>
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
}