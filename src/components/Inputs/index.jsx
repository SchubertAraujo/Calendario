/* eslint-disable no-console */
import { useContext, useEffect } from 'react';
import { MonthYearContext } from '../../context';

/* eslint-disable react/button-has-type */
export const Inputsss = () => {
  const context = useContext(MonthYearContext);
  const {
    // eslint-disable-next-line no-unused-vars
    contextState: { hourValue },
    setContextState,
  } = context;

  useEffect(() => {
    console.log('Valor atualizado:', hourValue);
  }, [hourValue]);
  const teste = () => {
    console.log('Antes da atualização:', hourValue);
    setContextState((state) => ({ ...state, hourValue: 23 }));
    // eslint-disable-next-line no-console
    console.log('Depois da atualização:', hourValue);
  };
  return (
    <button type="text" onClick={teste}>
      salvar
    </button>
  );
};
