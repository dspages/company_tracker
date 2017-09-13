import React from 'react';
import FirmForm from '../firm_index/firm_form';
import { Link } from 'react-router-dom';
import ContactIndexContainer from '../contact/contact_index_container.jsx';
import FinanceIndexContainer from '../finance/finance_index_container.jsx';
import {linearGradient, Area, AreaChart, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import {sortByYear} from '../../util/sort_util';

class FirmShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {financeVar1: "valuation"};
    this.changeFinanceVar1 = this.changeFinanceVar1.bind(this);
  }

  componentDidMount(){
    this.props.requestFirm(this.props.match.params.firmID);
  }

  changeFinanceVar1(event){
    this.setState({financeVar1: event.target.value});
  }

  render(){
    if(this.props.firm){
      let data = sortByYear(this.props.firm.finances);
      return (
        <div className="show">
          <Link className="item-part" to={`/`}>
           Return to Home Page
          </Link>
          <h1>Show Page</h1>
          <h1>Name: {this.props.firm.name}</h1>
          <text>Info: {this.props.firm.info}</text>
          <p>Status: {this.props.firm.status}</p>
            <FirmForm
            name = {this.props.firm.name}
            status = {this.props.firm.status}
            info = {this.props.firm.info}
            id = {this.props.firm.id}
            submitFunc = {this.props.editFirm}
            />
            <ContactIndexContainer
              id = {this.props.firm.id}
              />
            <FinanceIndexContainer
              id = {this.props.firm.id}
              />
            <div>Finances chart
              <select value = {this.state.financeVar1} onChange = {this.changeFinanceVar1}>
               <option value = "gross_income">Gross Income</option>
               <option value = "assets">Assets</option>
               <option value = "valuation">Valuation</option>
               <option value = "liabilities">Liabilities</option>
               <option value = "expenses">Expenses</option>
              </select>
              <AreaChart width={730} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey={this.state.financeVar1} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
              </AreaChart>
            </div>
        </div>
      );
    }else{
      return null;
    }
  }
}

export default FirmShow;
