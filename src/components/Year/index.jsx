import { useContext } from 'react';
import { MonthYearContext } from '../../context';

export const Year = () => {
  const context = useContext(MonthYearContext);
  const {
    contextState: { currentYear },
    setContextState,
  } = context;

  const handleNextYear = () => {
    setContextState((state) => ({
      ...state,
      currentYear: state.currentYear + 1,
    }));
  };

  const handlePreviousYear = () => {
    setContextState((state) => ({
      ...state,
      currentYear: state.currentYear - 1,
    }));
  };

  return (
    <>
      <button type="submit" onClick={handlePreviousYear}>
        anterior
      </button>
      {currentYear}
      <button type="submit" onClick={handleNextYear}>
        proximo
      </button>
    </>
  );
};
