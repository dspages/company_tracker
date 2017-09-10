import React from 'react';
import merge from 'lodash/merge';
import { Link } from 'react-router-dom';

class FinanceIndexItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = props;
  }

   render(){
     return(
       <li className="derived-index-item">
         <div className = "derived-index-part">
         <label>Year:
           {this.props.year}
         </label>
         <label>Assets:
           {this.props.assets}
         </label>
         <label>Liabilities:
           {this.props.liabilities}
        </label>
        <label>Valuation:
          {this.props.valuation}
       </label>
       <label>Gross Income:
         {this.props.gross_income}
      </label>
      <label>Expenses:
        {this.props.expenses}
     </label>
        </div>
        <div className = "derived-index-part">
          <Link className="item-part" to={`/finances/${this.props.id}/edit`}>
           Edit
          </Link>
          <button className = "item-part" onClick={this.props.destroyFinance.bind(this)}> Delete
          </button>
          </div>
       </li>
     );
   }
}

export default FinanceIndexItem;
