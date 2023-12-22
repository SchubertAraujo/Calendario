/* eslint-disable no-console */
import { useContext, useState } from 'react';
import './style.css';
import { MonthYearContext } from '../../context';

export const Calendar = () => {
  const context = useContext(MonthYearContext);
  const {
    contextState: { currentMonth, currentYear },
    setContextState,
  } = context;
  const [clickedElement, setClickedElement] = useState();

  const lastDayMonth = () => {
    const lastDay = new Date(currentYear, currentMonth, 0).getDate();
    return lastDay;
  };

  const firstDayWeekIndex = () => {
    const day = new Date(currentYear, currentMonth, 1);
    const dayIndex = day.getDay();
    return dayIndex;
  };

  const handleSelectDay = (index, selectedDay) => {
    setClickedElement(index);
    setContextState((state) => ({ ...state, currentDay: selectedDay }));
  };

  const renderMonthDays = () => {
    let daysEmpty = 0;
    const elements = [];
    const firstDayIndex = firstDayWeekIndex();
    const lastDay = lastDayMonth();
    const fullCalendarLoop = lastDay + firstDayIndex;
    for (let i = 1; i <= fullCalendarLoop; i += 1) {
      if (daysEmpty < firstDayIndex) {
        elements.push(<div key={i} />);
        daysEmpty += 1;
      } else
        elements.push(
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
          <div
            className="day-box-style"
            key={i}
            onClick={() => handleSelectDay(i, i - firstDayIndex)}
            style={{
              backgroundColor: clickedElement === i ? 'yellow' : 'white',
            }}
          >
            {i - firstDayIndex}
          </div>,
        );
    }
    return elements;
  };

  const rendeWeekDayName = () => {
    const daysWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const elements = [];

    for (const days in daysWeek) {
      elements.push(
        <div className="teste" key={days}>
          {daysWeek[days]}
        </div>,
      );
    }
    return elements;
  };
  return (
    <div className="calendar">
      {rendeWeekDayName()}
      {renderMonthDays()}
    </div>
  );
};
