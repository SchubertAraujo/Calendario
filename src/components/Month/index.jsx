import { useContext } from 'react';
import { MonthYearContext } from '../../context';

export const Month = () => {
  const monthName = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  const context = useContext(MonthYearContext);
  const {
    contextState: { currentMonth },
    setContextState,
  } = context;

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setContextState((state) => ({
        ...state,
        currentMonth: 11,
        currentYear: state.currentYear - 1,
      }));
    } else
      setContextState((state) => ({
        ...state,
        currentMonth: state.currentMonth - 1,
      }));
  };

  const handleNextMonth = () => {
    if (currentMonth === 11)
      setContextState((state) => ({
        ...state,
        currentMonth: 0,
        currentYear: state.currentYear + 1,
      }));
    else
      setContextState((state) => ({
        ...state,
        currentMonth: state.currentMonth + 1,
      }));
  };

  return (
    <>
      <button type="submit" onClick={handlePreviousMonth}>
        anterior
      </button>
      {monthName[currentMonth]}
      <button type="submit" onClick={handleNextMonth}>
        Next
      </button>
    </>
  );
};
