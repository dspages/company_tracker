import React from 'react';
import FinanceForm from '../finance/finance_form.jsx';
import { Link } from 'react-router-dom';

class FinanceDetailView extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestFinance(this.props.match.params.financeID);
  }

  render(){
    if (this.props.finance.id){
      return(
      <div>
        <Link className="item-part" to={`/`}>
         Return to Home Page
        </Link>
        <Link className="item-part" to={`/firms/${this.props.finance.company_id}`}>
         Return to Firm Page
        </Link>
        <div className = "info-list">
          <text className = "info-list-item">Year: {this.props.finance.year}</text>
          <text className = "info-list-item">Assets: {this.props.finance.assets}</text>
          <text className = "info-list-item">Liabilities: {this.props.finance.liabilities}</text>
          <text className = "info-list-item">Valuation: {this.props.finance.valuation}</text>
          <text className = "info-list-item">Gross Income: {this.props.finance.gross_income}</text>
          <text className = "info-list-item">Expenses {this.props.finance.expenses}</text>
        </div>
        <FinanceForm
          year = {this.props.finance.year}
          assets = {this.props.finance.assets}
          liabilities = {this.props.finance.liabilities}
          valuation = {this.props.finance.valuation}
          gross_income = {this.props.finance.gross_income}
          expenses = {this.props.finance.expenses}
          company_id = {this.props.finance.company_id}
          id = {this.props.finance.id}
          submitFunc = {this.props.editFinance}
          />
      </div>
    );
    }else{
      return null;
    }
  }
  
}

export default FinanceDetailView;
