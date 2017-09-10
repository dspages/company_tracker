import React from 'react';

const DEFAULT_STATE = {id: "", year: "", valuation: "", assets: "", liabilities: ""};

class FinanceForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props;
  }

  submitForm (event) {
    event.preventDefault();
    this.props.submitFunc({
      year: this.state.year,
      assets: this.state.assets,
      liabilities: this.state.liabilities,
      gross_income: this.state.gross_income,
      expenses: this.state.expenses,
      valuation: this.state.valuation,
      company_id: this.state.company_id,
      id: this.state.id});
  }

  changeYear (event) {
    this.setState({year: event.target.value});
  }

  changeAssets (event) {
    this.setState({assets: event.target.value});
  }

  changeLiabilities (event) {
    this.setState({liabilities: event.target.value});
  }

  changeGrossIncome (event) {
    this.setState({gross_income: event.target.value});
  }

  changeExpenses (event) {
    this.setState({expenses: event.target.value});
  }

  changeValuation (event) {
    this.setState({valuation: event.target.value});
  }

  render(){
    return (<div>
      <form className = "new-form">
        <div className = "new-form-row">
          Finance Form
          {this.props.errors}
         <br></br>
         <label>Year:
         <input value = {this.state.year} onChange = {this.changeYear.bind(this)}></input>
         </label>
         <label>Valuation:
         <input value = {this.state.valuation} onChange = {this.changeValuation.bind(this)}></input>
         </label>
         <label>Assets:
           <input value = {this.state.assets} onChange = {this.changeAssets.bind(this)}/>
         </label>
         <label>Liabilities:
          <input value = {this.state.liabilities} onChange = {this.changeLiabilities.bind(this)}/>
         </label>
         <label>Gross Income:
          <input value = {this.state.gross_income} onChange = {this.changeGrossIncome.bind(this)}/>
         </label>
         <label>Expenses:
          <input value = {this.state.expenses} onChange = {this.changeExpenses.bind(this)}/>
         </label>
         <input type = "submit" onClick = {this.submitForm.bind(this)}></input>
        </div>
       </form>
    </div>);
  }
}

export default FinanceForm;
