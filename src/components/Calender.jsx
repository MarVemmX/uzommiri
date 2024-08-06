import React from 'react';
import { GoDotFill } from 'react-icons/go';

const activities = [
  {
    id: 1,
    days: 'Every Wednesday',
    oneDay: '',
    content: 'Doctrine Class',
    time: '5pm WAT',
    contentx: null,
    timex: ''
  },
  {
    id: 2,
    days: 'Fri',
    oneDay: 'February 27',
    content: "Lenten retreat for Mom's",
    time: '3pm WAT',
  },
  {
    id: 3,
    days: 'Mon',
    oneDay: 'March 4th',
    content: "Lenten retreat for Girl's"
  },
  {
    id: 4,
    days: 'Fri-Tue',
    oneDay: 'April 5th-9th',
    dateRange: { start: new Date('2024-04-05'), end: new Date('2024-04-09') },
    content: "Easter workshop for undergraduates",
    time: '9.30am WAT',
  },
  {
    id: 5,
    days: 'Every Saturday',
    content: 'Pearl Club Activities',
    time: '10am WAT',
    contentx: 'Meditation and Benediction',
    timex: '5pm WAT',
  },
  {
    id: 6,
    days: 'Tue-Fri',
    oneDay: 'July 2nd-26th',
    dateRange: { start: new Date('2024-07-02'), end: new Date('2024-07-27') },
    content: 'Skill acquisition for post BECE Students',
  },
  {
    id: 9,
    days: 'Wed-Fri',
    oneDay: 'July 20th-Aug 23rd',
    content: 'Holiday program for girls in primary 3 to ss3',
    dateRange: { start: new Date('2024-07-20'), end: new Date('2024-08-23') },
  },
  {
    id: 7,
    days: 'Sat-Tue',
    oneDay: 'April 20th-23rd',
    content: 'Weekly meeting',
    dateRange: { start: new Date('2024-04-20'), end: new Date('2024-04-23') },
    time: '10am WAT',
  },
  {
    id: 8,
    days: 'Sat-Tue',
    oneDay: 'May 11th-14th',
    content: 'Long retreat for undergraduates',
    dateRange: { start: new Date('2024-04-20'), end: new Date('2024-04-23') },
  },
  {
    id: 10,
    days: 'Wed-Fri',
    oneDay: 'Aug 13th-21st',
    content: 'Kamp Connect',
    dateRange: { start: new Date('2024-08-13'), end: new Date('2024-08-21') },
  },
  {
    id: 11,
    oneDay: 'Second Sundays',
    content: 'Monthly Recollection',
    time: '9pm WAT',
  },
  {
    id: 12,
    days: 'Sat-Tue',
    oneDay: 'Aug 27th-31st',
    content: 'Pre university workshop',
  },
  {
    id: 13,
    empty: "No ACTIVITY ON THIS DAY"
  },
  {
    id: 14,
    days: 'Wed-Fri',
    oneDay: 'Oct 15th-18th',
    content: 'Holiday program for girls in Pri 3 to ss3',
  },
  {
    id: 15,
    days: 'Sun',
    oneDay: 'December 15th',
    content: 'Christmas party for children',
  },
  {
    id: 16,
    empty: "No ACTIVITY ON THIS DAY"
  },
];

const Calendar = () => {
  const currentMonth = new Date().getMonth(); // 0 = January, 11 = December

  const isCurrentMonthInRange = (start, end) => {
    if (!start || !end) return false;
    const startMonth = start.getMonth();
    const endMonth = end.getMonth();
    return currentMonth >= startMonth && currentMonth <= endMonth;
  };

  return (
    <div className="lg:py-20 py-10">
      <div className="activity-container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 md:text-left xs:text-center">
        {activities.map((activity) => {
          const { dateRange, oneDay, days, content, time, timex, contentx, empty } = activity;
          const isInDateRange = dateRange && isCurrentMonthInRange(dateRange.start, dateRange.end);
          const activityClass = dateRange
            ? isInDateRange
              ? 'bg-[#c1392b]'
              : 'bg-black'
            : 'bg-black';
          const hideOnXs = (activity.id === 13 || activity.id === 16) ? 'hidden md:block' : '';

          return (
            <div
              key={activity.id}
              className={`activity md:px-6 border border-[#c1392b] ${activityClass} ${hideOnXs}`}
            >
              <div>
                <p className="days text-xs text-gray-400 font-thin">{days}</p>
                {oneDay && (
                  <p className="one-day text-lg font-bold">{oneDay}</p>
                )}
                {content && (
                  <div className="flex flex-row">
                    <p className="py-2 text-xs">
                      <GoDotFill />
                    </p>
                    <p className="content text-sm mt">{content}</p>
                  </div>
                )}
                {time && (
                  <p className="time mt text-xs italic text-gray-500">{time}</p>
                )}
                {contentx && (
                  <div className='flex flex-row gap'>
                    <p className="pt-2 text-xs">
                      <GoDotFill />
                    </p>
                    <p className="content text-sm">{contentx}</p>
                  </div>
                )}
                {timex && (
                  <p className="time mt text-xs text-gray-500">{timex}</p>
                )}
                {empty && (
                  <p className="time py-10 text-2xl text-black">{empty}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
