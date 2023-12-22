/* eslint-disable no-console */
import { useState } from 'react';
import './index.css';
import { MonthYearContext } from '../../context';
import { globalState } from '../../context/globalContext';
import { Month } from '../Month';
import { Year } from '../Year';
import { EventsControl } from '../EventsControl';
import { Calendar } from '../Calendar/Calendar';

export function Home() {
  const [contextState, setContextState] = useState(globalState);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MonthYearContext.Provider value={{ contextState, setContextState }}>
      <Month />
      <Year />
      <Calendar />
      <EventsControl />
      {/* <Day /> */}
    </MonthYearContext.Provider>
  );
}
