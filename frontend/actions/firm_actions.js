export const RECEIVE_ALL_FIRMS = "RECEIVE_ALL_FIRMS";
export const RECEIVE_SINGLE_FIRM = "RECEIVE_SINGLE_FIRM";
export const REMOVE_SINGLE_FIRM = "REMOVE_SINGLE_FIRM";
export const RECEIVE_FIRM_ERRORS = "RECEIVE_FIRM_ERRORS";
export const CREATE_SINGLE_FIRM = "CREATE_SINGLE_FIRM";

import * as APIUtil from '../util/api_util';


export const requestAllFirms = () => (dispatch) => {
  return APIUtil.fetchFirms()
    .then(firms => dispatch(receiveAllFirms(firms)));
};

export const requestSingleFirm = (id) => (dispatch) => {
  return APIUtil.fetchFirm(id).then(firm => {
    dispatch(receiveSingleFirm(firm));
    return firm;
  });
};

export const createFirm = (cfirm, contacts, finances) => dispatch => (
  APIUtil.createFirm(cfirm, contacts, finances).then(firm => {
    dispatch(createSingleFirm(firm));
    return firm;
  }).fail(err => dispatch(receiveFirmErrors(err.responseJSON)))
);

export const editFirm = efirm => dispatch => (
  APIUtil.editFirm(efirm).then(firm => {
    dispatch(receiveSingleFirm(firm));
    return firm;
  }).fail(err => dispatch(receiveFirmErrors(err.responseJSON)))
);

export const destroyFirm = dfirm => dispatch => (
  APIUtil.deleteFirm(dfirm).then(() => {
    dispatch(removeSingleFirm(dfirm));
    return [];
  }).fail(err => dispatch(receiveFirmErrors(err.responseJSON)))
);

export const createSingleFirm = firm => ({
  type: CREATE_SINGLE_FIRM,
  firm
});


export const receiveAllFirms = firms => ({
  type: RECEIVE_ALL_FIRMS,
  firms
});

export const receiveSingleFirm = firm => ({
  type: RECEIVE_SINGLE_FIRM,
  firm
});

export const removeSingleFirm = firm => ({
  type: REMOVE_SINGLE_FIRM,
  firm
});

export const receiveFirmErrors = errors => ({
  type: RECEIVE_FIRM_ERRORS,
  errors
});
