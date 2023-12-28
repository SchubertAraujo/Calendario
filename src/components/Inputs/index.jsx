/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import InputMask from 'react-input-mask';
import { useCallback, useContext, useEffect, useRef } from 'react';
import { MonthYearContext } from '../../context';
import { EventsRender } from '../EventsRender';
import './style.css';

export const Inputs = () => {
  const inputHourValueRef = useRef();
  const inputDescValueRef = useRef();

  const context = useContext(MonthYearContext);
  const {
    contextState: { hourValue },
    setContextState,
  } = context;

  const getNextId = () => {
    const nextId = localStorage.getItem('id');
    return parseInt(nextId, 10) + 1;
  };
  const id = localStorage.getItem('id');
  if (id === null) {
    localStorage.setItem('id', 0);
  }

  const saveInStorage = useCallback(() => {
    const nextId = getNextId();
    if (hourValue !== '') {
      localStorage.setItem(id, JSON.stringify(context.contextState));
      localStorage.setItem('id', nextId);
      setContextState((state) => ({ ...state, hourValue: '' }));
    }
  }, [hourValue]);

  useEffect(() => {
    saveInStorage();
  }, [hourValue, saveInStorage]);

  const handleSaveEvent = () => {
    setContextState((state) => ({
      ...state,
      hourValue: inputHourValueRef.current.value,
    }));
    setContextState((state) => ({
      ...state,
      decriptionValue: inputDescValueRef.current.value,
    }));
    saveInStorage();
  };

  return (
    <>
      <div className="button-inputs">
        <InputMask
          mask="99:99"
          maskChar="-"
          placeholder="00:00"
          className="input-style hour-input"
          type="text"
          ref={inputHourValueRef}
        />
        <input
          className="input-style"
          type="text"
          ref={inputDescValueRef}
          placeholder="Descrição do lembrete"
        />
        <button className="save-event" type="submit" onClick={handleSaveEvent}>
          Salvar
        </button>
      </div>
      <EventsRender states={{ context }} />
    </>
  );
};
