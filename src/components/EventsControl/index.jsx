import { useContext, useRef, useState } from 'react';
import { MonthYearContext } from '../../context';
import { EventsRender } from '../EventsRender';

export const EventsControl = () => {
  const [inputHourValue, setHourInputValue] = useState('');
  const [inputDescValue, setInputDescValue] = useState('');
  const inputHourRef = useRef(null);
  const inputDescRef = useRef(null);

  const context = useContext(MonthYearContext);
  const {
    contextState: {
      currentMonth,
      currentDay,
      currentYear,
      hourValue,
      descriptionValue,
    },
    setContextState,
  } = context;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const eventsData = {
    month: currentMonth,
    year: currentYear,
    day: currentDay,
    hour: hourValue,
    descripiton: descriptionValue,
  };

  const id = localStorage.getItem('id');
  if (id === null) {
    localStorage.setItem('id', 0);
  }
  const getNextId = () => {
    const nextId = localStorage.getItem('id');
    return parseInt(nextId, 10) + 1;
  };

  const handleHourBlur = () => {
    setContextState((state) => ({ ...state, hourValue: inputHourValue }));
  };
  const handleHourChange = (event) => {
    setHourInputValue(event.target.value);
  };

  const handleDescriptionBlur = () => {
    setContextState((state) => ({
      ...state,
      descriptionValue: inputDescValue,
    }));
  };
  const handleDescriptionChange = (event) => {
    setInputDescValue(event.target.value);
  };

  const handleSaveEvent = () => {
    if (inputHourRef.current) inputHourRef.current.blur();
    if (inputDescRef.current) inputDescRef.current.blur();

    setContextState((state) => ({ ...state, hourValue: inputHourValue }));
    setContextState((state) => ({
      ...state,
      descriptionValue: inputDescValue,
    }));

    const nextId = getNextId();
    localStorage.setItem(id, JSON.stringify(eventsData));
    localStorage.setItem('id', nextId);
  };

  return (
    <div>
      <input
        type="text"
        value={inputHourValue}
        onChange={handleHourChange}
        ref={inputHourRef}
        onBlur={handleHourBlur}
      />
      <input
        type="text"
        value={inputDescValue}
        onChange={handleDescriptionChange}
        ref={inputDescRef}
        onBlur={handleDescriptionBlur}
      />
      <button type="submit">Novo</button>
      <button type="submit" onClick={handleSaveEvent}>
        salvar
      </button>
      <EventsRender />
    </div>
  );
};
