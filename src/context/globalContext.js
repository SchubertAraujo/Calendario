const currentDate = new Date();
export const globalState = {
  currentMonth: currentDate.getMonth(),
  currentYear: currentDate.getFullYear(),
  currentDay: currentDate.getDate(),
};
