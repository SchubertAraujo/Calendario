export const reducer = (state, action) => {
  if (action.type === 'previousMonth') {
    if (state.currentMonth === 0) {
      return {
        ...state,
        currentMonth: 11,
        currentYear: state.currentYear - 1,
      };
    }
    return {
      ...state,
      currentMonth: state.currentMonth - 1,
    };
  }
  if (action.type === 'nextMonth') {
    if (state.currentMonth === 11)
      return {
        ...state,
        currentMonth: 0,
        currentYear: state.currentYear + 1,
      };
    return {
      ...state,
      currentMonth: state.currentMonth + 1,
    };
  }
  if (action.type === 'previousYear') {
    return {
      ...state,
      currentYear: state.currentYear - 1,
    };
  }
  if (action.type === 'nextYear') {
    return {
      ...state,
      currentYear: state.currentYear + 1,
    };
  }
  return { ...state };
};
