import { useContext, useState } from 'react';
import './index.css';
import { MonthYearContext } from '../../context';
import { Calendar } from '../Calendar';
import { globalState } from '../../context/globalContext';
import { Month } from '../Month';
import { Year } from '../Year';

export function Home() {
  const [contextState, setContextState] = useState(globalState);

  // eslint-disable-next-line react/no-unstable-nested-components
  const GravaEventos = () => {
    const context = useContext(MonthYearContext);
    const {
      contextState: { currentDay },
    } = context;
    const eventsData = {
      day: currentDay,
      hour: '8:00',
      descripiton: 'Medico dentista',
    };

    let id = 0;
    const handleSaveEvent = () => {
      localStorage.setItem(id, JSON.stringify(eventsData));
      // eslint-disable-next-line operator-assignment
      id = id + 1;
    };
    return (
      <div>
        <input type="text" />
        <button type="submit">Novo</button>
        <button type="submit" onClick={handleSaveEvent}>
          salvar
        </button>
      </div>
    );
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MonthYearContext.Provider value={{ contextState, setContextState }}>
      <Month />
      <Year />
      <Calendar />
      <GravaEventos />
    </MonthYearContext.Provider>
  );
}
