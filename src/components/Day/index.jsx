import { useContext } from 'react';
import { MonthYearContext } from '../../context';

export const Day = () => {
  const context = useContext(MonthYearContext);
  const {
    contextState: { currentDay },
  } = context;
  return <p>{currentDay}</p>;
};
