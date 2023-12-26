import { useContext, useEffect, useReducer } from 'react';
import { globalState } from '../../context/globalContext';
import { MonthYearContext } from '../../context';
import { reducer } from './reducer';
import { Button } from '../Buttons';

export const MonthAndYear = () => {
  const [state, dispatch] = useReducer(reducer, globalState);
  const context = useContext(MonthYearContext);
  const { setContextState } = context;

  useEffect(() => {
    setContextState(state);
  });

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

  const handlePreviousMonth = () => {
    dispatch({ type: 'previousMonth' });
  };

  const handleNextMonth = () => {
    dispatch({ type: 'nextMonth' });
  };

  const handlePreviousYear = () => {
    dispatch({ type: 'previousYear' });
  };

  const handleNextYear = () => {
    dispatch({ type: 'nextYear' });
  };

  return (
    <>
      <Button
        previous={handlePreviousYear}
        descripiton={state.currentYear}
        next={handleNextYear}
      />
      <Button
        previous={handlePreviousMonth}
        descripiton={monthName[state.currentMonth]}
        next={handleNextMonth}
      />
    </>
  );
};
