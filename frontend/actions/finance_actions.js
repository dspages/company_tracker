
export const RECEIVE_SINGLE_FINANCE = "RECEIVE_SINGLE_FINANCE";
export const VIEW_SINGLE_FINANCE = "VIEW_SINGLE_FINANCE";
export const REMOVE_SINGLE_FINANCE = "REMOVE_SINGLE_FINANCE";
export const RECEIVE_FINANCE_ERRORS = "RECEIVE_FINANCE_ERRORS";
export const CREATE_SINGLE_FINANCE = "CREATE_SINGLE_FINANCE";

import * as APIUtil from '../util/api_util';

export const requestSingleFinance = (id) => (dispatch) => {
  return APIUtil.fetchFinance(id).then(finance => {
    dispatch(viewSingleFinance(finance));
    return finance;
  });
};

export const createFinance = cfinance => dispatch => (
  APIUtil.createFinance(cfinance).then(finance => {
    dispatch(createSingleFinance(finance));
    return finance;
  }).fail(err => dispatch(receiveFinanceErrors(err.responseJSON)))
);

export const editFinance = efinance => dispatch => (
  APIUtil.editFinance(efinance).then(finance => {
    dispatch(viewSingleFinance(finance));
    return finance;
  }).fail(err => dispatch(receiveFinanceErrors(err.responseJSON)))
);

export const editFinanceLocal = lfinance => dispatch => {
    dispatch(viewSingleFinance(lfinance));
    return lfinance;
  };

export const destroyFinance = dfinance => dispatch => (
  APIUtil.deleteFinance(dfinance).then(() => {
    dispatch(removeSingleFinance(dfinance));
    return [];
  }).fail(err => dispatch(receiveFinanceErrors(err.responseJSON)))
);

export const createSingleFinance = finance => ({
  type: CREATE_SINGLE_FINANCE,
  finance
});

export const receiveSingleFinance = finance => ({
  type: RECEIVE_SINGLE_FINANCE,
  finance
});

export const viewSingleFinance = finance => ({
  type: VIEW_SINGLE_FINANCE,
  finance
});

export const removeSingleFinance = finance => ({
  type: REMOVE_SINGLE_FINANCE,
  finance
});

export const receiveFinanceErrors = errors => ({
  type: RECEIVE_FINANCE_ERRORS,
  errors
});
