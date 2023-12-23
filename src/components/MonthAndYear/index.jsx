import './style.css';
import { useContext, useEffect, useReducer } from 'react';
import { globalState } from '../../context/globalContext';
import { MonthYearContext } from '../../context';
import { reducer } from './reducer';

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

  return (
    <div className="previous-next-style">
      <div className="button-style">
        <button
          className="previous-style"
          type="submit"
          onClick={() => dispatch({ type: 'previousMonth' })}
        >
          {'<'}
        </button>
        <button className="description-style" type="submit">
          {monthName[state.currentMonth]}
        </button>
        <button
          className="next-style"
          type="submit"
          onClick={() => dispatch({ type: 'nextMonth' })}
        >
          {'>'}
        </button>
      </div>
      <div className="button-style">
        <button
          className="previous-style"
          type="submit"
          onClick={() => dispatch({ type: 'previousYear' })}
        >
          {'<'}
        </button>
        <button className="description-style" type="submit">
          {state.currentYear}
        </button>
        <button
          className="next-style"
          type="submit"
          onClick={() => dispatch({ type: 'nextYear' })}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};
