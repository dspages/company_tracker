import { values, merge } from 'lodash';


export const allFirms = ({firms}) => {
  return {firmList: values(firms.firmList)};
};

export const oneFirm = ({firms}, id) => {
  return firms.firmList[id];
};

export const oneContact = ({contacts}) => {
  return contacts.contact;
};

export const oneFinance = ({finances}) => {
  return finances.finance;
};

export const selectedFinances = ({firms}) => {
  return firms.firmList[firms.currentFirm].finances;
};

export const selectedFirmID = ({firms}) => {
    return firms.currentFirm;
};

export const selectedContacts = ({firms}) => {
  return firms.firmList[firms.currentFirm].contacts;
};
