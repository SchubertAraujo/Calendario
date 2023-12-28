import { useCallback, useContext, useEffect, useState } from 'react';
import { MonthYearContext } from '../../context';
import './style.css';

export const EventsRender = () => {
  const context = useContext(MonthYearContext);
  const {
    contextState: { currentYear, currentMonth, currentDay },
  } = context;

  const [id, setId] = useState();
  useEffect(() => {
    localStorage.removeItem(id);
    setId('');
  }, [id]);

  const getEventsData = useCallback(() => {
    const eventsArray = [];
    const currentId = localStorage.getItem('id');
    for (let i = 0; i <= currentId; i += 1) {
      const eventsOjb = JSON.parse(localStorage.getItem(i));
      // eslint-disable-next-line no-continue
      if (eventsOjb === null) continue;
      eventsOjb.id = i;
      eventsArray.push(eventsOjb);
    }
    return eventsArray;
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const removeEvent = (objId) => {
    setId(objId);
  };

  const showEvents = () => {
    const eventsObj = getEventsData();
    const elements = [];
    for (const e in eventsObj) {
      const sameYear = currentYear === eventsObj[e].currentYear;
      const sameMonth = currentMonth === eventsObj[e].currentMonth;
      const sameDay = currentDay === eventsObj[e].currentDay;
      if (sameYear && sameMonth && sameDay) {
        elements.push(
          <div className="events" key={e}>
            <p>{eventsObj[e].hourValue} </p>
            <p>{eventsObj[e].decriptionValue} </p>
            <button
              id={eventsObj[e].id}
              className="delete-style"
              type="submit"
              // onClick={() => removeEvent(eventsObj[e].id)}
              onClick={() => removeEvent(eventsObj[e].id)}
            >
              X
            </button>
          </div>,
        );
      }
    }
    return elements;
  };

  return <>{showEvents()}</>;
};
