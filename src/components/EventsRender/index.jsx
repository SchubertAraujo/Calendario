/* eslint-disable no-console */
import { useContext, useEffect, useState } from 'react';
import { MonthYearContext } from '../../context';

export const EventsRender = () => {
  const context = useContext(MonthYearContext);
  // const [eventsObj, setEventsObj] = useState();
  const {
    // eslint-disable-next-line no-unused-vars
    contextState: { currentYear, currentMonth, currentDay },
  } = context;
  const [teste, setTeste] = useState();

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

  useEffect(() => {
    setTeste(getEventsData());
  }, [getEventsData]);

  const removeEvent = (objId) => {
    localStorage.removeItem(objId);
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
