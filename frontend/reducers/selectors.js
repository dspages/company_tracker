import { values, merge } from 'lodash';


export const allFirms = ({firms}) => {
  // console.log(values(firms.firmList));
  return {firmList: values(firms.firmList)};
  // return values(firms.firmList);
  // return Object.keys(firms.firmList).map(id => firms.firmList[id]);
  // return array_ify_firmlist(firms);
  // return firms;
};


export const oneFirm = ({firms}, id) => {
  // console.log(id);
  // console.log(firms.firmList);
  return firms.firmList[id];
};

export const selectedContacts = ({firms}, id) => {
  // console.log(id);
  // console.log(firms.firmList);
  return firms.firmList[id].contacts;
};
