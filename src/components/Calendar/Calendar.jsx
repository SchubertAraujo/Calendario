/* eslint-disable no-nested-ternary */
import { useContext, useEffect, useState } from 'react';
import './style.css';
import { MonthYearContext } from '../../context';

export const Calendar = () => {
  const context = useContext(MonthYearContext);
  const {
    contextState: { currentMonth, currentYear },
    setContextState,
  } = context;
  // eslint-disable-next-line no-console

  const [clickedElement, setClickedElement] = useState('');
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const isCurrentMounth = month === currentMonth;
  const isCurrentYear = year === currentYear;

  const firstDay = new Date(currentYear, currentMonth, 1);
  const firstDayIndex = firstDay.getDay();
  const lastDayMonth = new Date(currentYear, currentMonth, 0).getDate();

  useEffect(() => {
    setClickedElement('');
  }, [currentYear, currentMonth]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSelectDay = (index, selectDay) => {
    setClickedElement(index);
    setContextState((state) => ({ ...state, currentDay: selectDay }));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const renderMonthDays = () => {
    let daysEmpty = 0;
    const elements = [];
    const fullCalendarLoop = lastDayMonth + firstDayIndex;
    for (let i = 1; i <= fullCalendarLoop; i += 1) {
      const isToday =
        i - firstDayIndex === day && isCurrentMounth && isCurrentYear;
      if (daysEmpty < firstDayIndex) {
        elements.push(<div key={i} />);
        daysEmpty += 1;
      } else
        elements.push(
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
          <div
            key={i}
            onClick={() => handleSelectDay(i, i - firstDayIndex, isToday)}
            className={`day-box-style ${isToday ? 'colored' : ''}
            }`}
            style={{
              backgroundColor:
                clickedElement === i && isToday
                  ? 'var(--blue-color)'
                  : clickedElement === i && !isToday
                    ? 'white'
                    : '',
              border:
                clickedElement === i && isToday
                  ? '2px solid var(--gray-color)'
                  : clickedElement === i && !isToday
                    ? '2px solid var(--blue-color)'
                    : '',
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
        <div className="day-box-style" key={days}>
          {daysWeek[days]}
        </div>,
      );
    }
    return elements;
  };

  useEffect(() => {
    renderMonthDays();
  });

  return (
    <div className="calendar">
      {rendeWeekDayName()}
      {renderMonthDays()}
    </div>
  );
};
