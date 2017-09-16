import React from 'react';

class FinanceForm extends React.Component {

  constructor(props){
    super(props);
    this.changeYear = this.changeYear.bind(this);
    this.changeValuation = this.changeValuation.bind(this);
    this.changeAssets = this.changeAssets.bind(this);
    this.changeLiabilities = this.changeLiabilities.bind(this);
    this.changeGrossIncome = this.changeGrossIncome.bind(this);
    this.changeExpenses = this.changeExpenses.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm (event) {
    event.preventDefault();
    this.props.submitFunc({
      year: this.props.year,
      assets: this.props.assets,
      liabilities: this.props.liabilities,
      gross_income: this.props.gross_income,
      expenses: this.props.expenses,
      valuation: this.props.valuation,
      company_id: this.props.company_id,
      id: this.props.id});
  }

  changeYear (event) {
    this.props.editFinanceLocal({year: event.target.value});
  }

  changeAssets (event) {
    this.props.editFinanceLocal({assets: event.target.value});
  }

  changeLiabilities (event) {
    this.props.editFinanceLocal({liabilities: event.target.value});
  }

  changeGrossIncome (event) {
    this.props.editFinanceLocal({gross_income: event.target.value});
  }

  changeExpenses (event) {
    this.props.editFinanceLocal({expenses: event.target.value});
  }

  changeValuation (event) {
    this.props.editFinanceLocal({valuation: event.target.value});
  }

  render(){
    return (<div>
      <form className = "new-form">
        <div className = "new-form-row">
          Finance Form
          {this.props.errors}
         <label>Fiscal Year:
         <input value = {this.props.year} onChange = {this.changeYear}></input>
         </label>
         <label>Assets:
           <input value = {this.props.assets} onChange = {this.changeAssets}/>
         </label>
         <label>Liabilities:
          <input value = {this.props.liabilities} onChange = {this.changeLiabilities}/>
         </label>
         <label>Valuation:
         <input value = {this.props.valuation} onChange = {this.changeValuation}></input>
         </label>
         <label>Gross Income:
          <input value = {this.props.gross_income} onChange = {this.changeGrossIncome}/>
         </label>
         <label>Expenses:
          <input value = {this.props.expenses} onChange = {this.changeExpenses}/>
         </label>
         <button onClick = {this.submitForm}>Confirm</button>
        </div>
       </form>
    </div>);
  }

}

export default FinanceForm;
