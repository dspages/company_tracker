
export const receiveContactHelper = (nextState, action) => {
  let contacts = nextState.firmList[action.contact.company_id].contacts;
  contacts = contacts.filter(function(el) {
    return el.id !== action.contact.id;
  });
  contacts.push(action.contact);
  nextState.firmList[action.contact.company_id].contacts = contacts;
  return nextState;
};

export const createContactHelper = (nextState, action) => {
  let contacts = nextState.firmList[action.contact.company_id].contacts;
  contacts = contacts.filter(function(el) {
    return el.id !== action.contact.id;
  });
  contacts.push(action.contact);
  nextState.firmList[action.contact.company_id].contacts = contacts;
  return nextState;
};

export const removeContactHelper = (nextState, action) => {
  let contacts = nextState.firmList[action.contact.company_id].contacts;
  contacts = contacts.filter(function(el) {
    return el.id !== action.contact.id;
  });
  nextState.firmList[action.contact.company_id].contacts = contacts;
  return nextState;
};
