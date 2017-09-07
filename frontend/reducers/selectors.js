import { values, merge } from 'lodash';


export const allFirms = ({firms}) => {
  return {firmList: values(firms.firmList)};
};

export const oneFirm = ({firms}, id) => {
  return firms.firmList[id];
};

export const selectedFirmID = ({firms}) => {
    return firms.currentFirm;
};

export const selectedContacts = ({firms}) => {
  return firms.firmList[firms.currentFirm].contacts;
};
