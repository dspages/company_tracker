import React from 'react';
import merge from 'lodash/merge';
import { Link } from 'react-router-dom';

class ContactIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

   render(){
    //  console.log(this.props);
     return(
       <li className="post-index-item">
          {this.props.name}
          {this.props.email}
          {this.props.notes}
          <button className = "item-part" onClick={this.props.updateContact}> Update
          </button>
          <button className = "item-part" onClick={this.props.destroyContact}> Delete
          </button>
       </li>
     );
   }
}

export default ContactIndexItem;
