import React from 'react';
import merge from 'lodash/merge';
import { Link } from 'react-router-dom';

class ContactIndexItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = props;
  }

   render(){
     return(
       <li className="derived-index-item">
         <div className = "derived-index-part">
         <label>Name:
           {this.props.name}
         </label>
         <label>Notes:
           {this.props.notes}
         </label>
         <label>Email:
           {this.props.email}
        </label>
        </div>
        <div className = "derived-index-part">
          <Link className="item-part" to={`/contacts/${this.props.id}/edit`}>
           Edit
          </Link>
          <button className = "item-part" onClick={this.props.destroyContact.bind(this)}> Delete
          </button>
          </div>
       </li>
     );
   }
}

export default ContactIndexItem;
