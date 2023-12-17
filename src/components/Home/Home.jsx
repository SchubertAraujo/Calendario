/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-unused-vars */
import './index.css';

export function Home() {
  const lastDayMonth = (year, month) => {
    const lastDay = new Date(year, month, 0).getDate();
    return lastDay;
  };

  const firstDayWeekIndex = (year, month) => {
    const day = new Date(year, month - 1, 1);
    const dayIndex = day.getDay();
    return dayIndex;
  };

  const renderIten = () => {
    let daysEmpty = 0;
    const elements = [];
    const firstDayIndex = firstDayWeekIndex(2023, 12);
    const lastDay = lastDayMonth(2023, 12);
    const fullCalendarLoop = lastDay + firstDayIndex;
    for (let i = 1; i <= fullCalendarLoop; i += 1) {
      if (daysEmpty < firstDayIndex) {
        elements.push(<div key={i} />);
        daysEmpty += 1;
      } else elements.push(<div key={i}>{i - firstDayIndex}</div>);
    }
    return elements;
  };

  const renderTwo = () => {
    const teste = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const elementes = [];

    for (const e of teste) {
      <div key={e}>{e}</div>;
    }
  };
  return (
    <div className="teste">
      { renderTwo() }
      { renderIten() }
    </div>
  );
}
