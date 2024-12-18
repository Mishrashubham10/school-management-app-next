import FormModal from '@/components/FormModal';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import { role, teachersData } from '@/lib/data';
import { Class, Subject, Teacher } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

type TeacherList = Teacher & { subjects: Subject[] } & { classes: Class[] };

const columns = [
  {
    header: 'Info',
    accessor: 'info',
  },
  {
    header: 'Teacher Id',
    accessor: 'teacherId',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Subjects',
    accessor: 'subjects',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Classes',
    accessor: 'classes',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Phone',
    accessor: 'phone',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Address',
    accessor: 'address',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
];

const renderRow = (items: TeacherList) => (
  <tr
    key={items.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-shubhPurpleLight"
  >
    <td className="flex items-center gap-4 p-4">
      <Image
        src={items.img || '/noAvatar.png'}
        alt=""
        width={40}
        height={40}
        className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <h3 className="font-semibold">{items.name}</h3>
        <p className="text-xs text-gray-500">{items?.email}</p>
      </div>
    </td>
    <td className="hidden md:table-cell">{items.username}</td>
    <td className="hidden md:table-cell">{items?.subjects?.join(',')}</td>
    <td className="hidden md:table-cell">{items?.classes?.join(',')}</td>
    <td className="hidden lg:table-cell">{items.phone}</td>
    <td className="hidden lg:table-cell">{items.address}</td>
    <td>
      <div className="flex items-center gap-2">
        {/* LINK BUTTON */}
        <FormModal table="teacher" type="update" id={items.id} data={items} />
        {/* BUTTON */}
        {role === 'admin' && (
          <FormModal table="teacher" type="delete" id={items.id} />
        )}
      </div>
    </td>
  </tr>
);

export default function TeachersList() {
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
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
            {role === 'admin' && <FormModal table="teacher" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      <div className="">
        <Table columns={columns} renderRow={renderRow} data={teachersData} />
      </div>
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
}
