import React from 'react';
import FinanceIndexItem from './finance_index_item';
import FinanceForm from './finance_form';

class FinanceList extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    const { editFinanceLocal, selectedFinances, editFinance,
      createFinance, errors} = this.props;
    const destroyFunctionGenerator = (dfinance) => {
      return () => {this.props.destroyFinance(dfinance);};
    };
    let key=1;
    let financeListItems;
    if(selectedFinances && Object.values(selectedFinances).length > 0)
    {
      financeListItems = Object.values(selectedFinances).map(finance => (
          <FinanceIndexItem
          year = {finance.year}
          liabilities = {finance.liabilities}
          assets = {finance.assets}
          gross_income = {finance.gross_income}
          expenses = {finance.expenses}
          valuation = {finance.valuation}
          key = {key++}
          id = {finance.id}
          company_id = {this.props.id}
          destroyFinance = {destroyFunctionGenerator(finance)}
          editFinanceLocal = {editFinanceLocal}
          editFinance = {editFinance}
          />
        )
      );
    }else{
      financeListItems = "";
    }

    return(
      <div>
        <h1 className = "header">Firm Finances</h1>
        <div className = "main-box">
          <ul className = "finance-list">
            {financeListItems}
          </ul>
          <FinanceForm
            year = {this.props.finance.year}
            liabilities = {this.props.finance.liabilities}
            assets = {this.props.finance.assets}
            gross_income = {this.props.finance.gross_income}
            expenses = {this.props.finance.expenses}
            valuation = {this.props.finance.valuation}
            editFinanceLocal = {editFinanceLocal}
            submitFunc = {createFinance}
            company_id = {this.props.id}
            />
        </div>
      </div>
    );
  }

}

export default FinanceList;
