/* eslint-disable no-console */
import { useContext, useState } from 'react';
import { MonthYearContext } from '../../context';

export const EventsRender = () => {
  const context = useContext(MonthYearContext);
  const {
    contextState: { currentYear, currentMonth, currentDay },
  } = context;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getEventsData = () => {
    const eventsArray = [];
    const currentId = localStorage.getItem('id');
    for (let i = 0; i <= currentId; i += 1) {
      const eventsOjb = JSON.parse(localStorage.getItem(i));
      // eslint-disable-next-line no-continue
      if (eventsOjb === null) continue;
      const sameYear = currentYear === eventsOjb.year;
      const sameMonth = currentMonth === eventsOjb.month;
      const sameDay = currentDay === eventsOjb.day;
      if (sameYear && sameMonth && sameDay) {
        eventsOjb.id = i;
        eventsArray.push(eventsOjb);
      }
    }
    return eventsArray;
  };
  const [teste, setTeste] = useState(getEventsData);

  const removeEvent = (objId) => {
    localStorage.removeItem(objId);
    setTeste(getEventsData);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const showEvents = () => {
    const eventsObj = teste;
    const elements = [];
    for (const e in eventsObj) {
      elements.push(
        <div key={e}>
          <p>{eventsObj[e].hour} </p>
          <button
            id={eventsObj[e].id}
            type="submit"
            onClick={() => removeEvent(eventsObj[e].id)}
          >
            XXX
          </button>
        </div>,
      );
    }
    return elements;
  };

  return <>{showEvents()};</>;
};
