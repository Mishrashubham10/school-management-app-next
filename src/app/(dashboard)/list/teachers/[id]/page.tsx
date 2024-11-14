import BigCalendar from '@/components/BigCalendar';
import Image from 'next/image';
import Link from 'next/link';
import Announcements from '@/components/Announcements';
import Performance from '@/components/Performance';

export default function SingleTeacherPage() {
  return (
    <div className="flex-1 p-1 flex flex-col gap-4 xl:flex-row">
      {/* --------------- LEFT --------------- */}
      <div className="w-full xl:w-2/3">
        {/* --------------- TOP --------------- */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* --------------- USER INFO CARD --------------- */}
          <div className="bg-shubhSky py-6 px-4 rounded-md flex-1 flex gap-4">
            {/* ------------ IMAGE CONTAINER ------------ */}
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            {/* ------------ INFO CONTAINER ------------ */}
            <div className="w-2/3 flex flex-col justify-between gap-4">
              {/* TITLE */}
              <h1 className="text-xl font-semibold">John Doe</h1>
              {/* DESC */}
              <p className="text-sm text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </p>
              {/* ICONS */}
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                {/* FIRST ITEM */}
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                {/* FIRST ITEM */}
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>January 20</span>
                </div>
                {/* FIRST ITEM */}
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>
                {/* FIRST ITEM */}
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>1 123 567</span>
                </div>
              </div>
            </div>
          </div>
          {/* --------------- SMALL CARD --------------- */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* FIRST CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w- h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* SECOND CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>
            {/* THIRD CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* FOURTH CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* --------------- BOTTOM --------------- */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Teacher's Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* --------------- RIGHT --------------- */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
      {/* TOP SECTION */}
      <div className="bg-white p-4 rounded-md">
        <h1 className='text-xl font-semibold'>Shortcuts</h1>
        <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className='p-3 rounded-md bg-shubhSkyLight' href="/">Teacher's Classes</Link>
            <Link className='p-3 rounded-md bg-shubhPurpleLight' href="/">Teacher's Students</Link>
            <Link className='p-3 rounded-md bg-shubhYellowLight' href="/">Teacher's Lessons</Link>
            <Link className='p-3 rounded-md bg-pink-50' href="/">Teacher's Exams</Link>
            <Link className='p-3 rounded-md bg-shubhSkyLight' href="/">Teacher's Assignments</Link>
        </div>
      </div>
      {/* CHART */}
      <Performance />
      {/* ANNOUNCEMENT */}
      <Announcements />
      </div>
    </div>
  );
}
