/* eslint-disable no-console */
import { useState } from 'react';
import './index.css';
import { MonthYearContext } from '../../context';
import { globalState } from '../../context/globalContext';
import { EventsControl } from '../EventsControl';
import { Calendar } from '../Calendar/Calendar';
import { MonthAndYear } from '../MonthAndYear';

export function Home() {
  const [contextState, setContextState] = useState(globalState);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MonthYearContext.Provider value={{ contextState, setContextState }}>
      <div className="container">
        <MonthAndYear />
        <Calendar />
        <EventsControl />
      </div>
    </MonthYearContext.Provider>
  );
}
