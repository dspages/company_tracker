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
         <label className = "derived-index-category"><text className = "padded-text">Year: </text>
           {this.props.year}
         </label>
         <label className = "derived-index-category"><text className = "padded-text">Assets: </text>
           {this.props.assets}
         </label>
         <label className = "derived-index-category"><text className = "padded-text">Liabilities: </text>
           {this.props.liabilities}
        </label>
        <label className = "derived-index-category"><text className = "padded-text">Valuation: </text>
          {this.props.valuation}
       </label>
       <label className = "derived-index-category"><text className = "padded-text">Gross Income: </text>
         {this.props.gross_income}
      </label>
      <label className = "derived-index-category"><text className = "padded-text">Expenses: </text>
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
