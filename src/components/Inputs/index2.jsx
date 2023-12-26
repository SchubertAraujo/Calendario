/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { MonthYearContext } from '../../context';
import { EventsRender } from '../EventsRender';

export const Inputs = () => {
  const [inputHourValue, setHourInputValue] = useState('');
  const [inputDescValue, setInputDescValue] = useState('');
  const inputHourRef = useRef(null);
  const inputDescRef = useRef(null);

  const context = useContext(MonthYearContext);
  const { contextState, setContextState } = context;

  const id = localStorage.getItem('id');
  if (id === null) {
    localStorage.setItem('id', 0);
  }

  const getNextId = () => {
    const nextId = localStorage.getItem('id');
    return parseInt(nextId, 10) + 1;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const salva = () => {
    const nextId = getNextId();
    localStorage.setItem(id, JSON.stringify(contextState));
    localStorage.setItem('id', nextId);
  };

  useEffect(() => {
    salva();
  }, [context, salva]);

  // const handleHourBlur = () => {
  //   // setContextState((state) => ({
  //   //   ...state,
  //   //   hourValue: 'hahahah',
  //   // }));
  //   // console.log(hourValue);
  //   // console.log(currentMonth);
  //   // console.log(context.contextState);
  // };

  const handleHourChange = (event) => {
    setHourInputValue(event.target.value);
  };

  const handleDescriptionBlur = () => {
    // setContextState(() => ({
    //   descriptionValue: inputDescValue,
    // }));
  };
  const handleDescriptionChange = (event) => {
    setInputDescValue(event.target.value);
  };

  const handleSaveEvent = () => {
    // if (inputHourRef.current) inputHourRef.current.blur();
    if (inputDescRef.current) inputDescRef.current.blur();

    setContextState(() => ({
      ...context.contextState,
      hourValue: inputHourValue,
    }));
    // setContextState(() => ({
    //   hourValue: 'adasd',
    // }));
    // setContextState((state) => ({
    //   ...state,
    //   currentMonth: 2,
    // }));
    // console.log(hourValue);
    // console.log(currentMonth);
    // setContextState((state) => ({
    //   ...state,
    //   decriptionValue: inputDescValue,
    // }));
  };

  return (
    <div>
      <input
        type="text"
        value={inputHourValue}
        onChange={handleHourChange}
        ref={inputHourRef}
        // onBlur={handleHourBlur}
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
