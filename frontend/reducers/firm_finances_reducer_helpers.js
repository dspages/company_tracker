

export const receiveFinanceHelper = (nextState, action) => {
  let finances = nextState.firmList[action.finance.company_id].finances;
  finances = finances.filter(function(el) {
    return el.id !== action.finance.id;
  });
  finances.push(action.finance);
  nextState.firmList[action.finance.company_id].finances = finances;
  return nextState;
};

export const createFinanceHelper = (nextState, action) => {
  let finances = nextState.firmList[action.finance.company_id].finances;
  finances = finances.filter(function(el) {
    return el.id !== action.finance.id;
  });
  finances.push(action.finance);
  nextState.firmList[action.finance.company_id].finances = finances;
  return nextState;
};

export const removeFinanceHelper = (nextState, action) => {
  let finances = nextState.firmList[action.finance.company_id].finances;
  finances = finances.filter(function(el) {
    return el.id !== action.finance.id;
  });
  nextState.firmList[action.finance.company_id].finances = finances;
  return nextState;
};
