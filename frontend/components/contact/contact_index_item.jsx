import React from 'react';
import merge from 'lodash/merge';
import { Link } from 'react-router-dom';

class ContactIndexItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = props;
    console.log(props);
  }

  submitForm (event) {
    event.preventDefault();
    this.props.editContact({
      name: this.state.name,
      notes: this.state.notes,
      email: this.state.email,
      company_id: this.state.company_id,
      id: this.state.id});
  }

  changeName (event) {
    this.setState({name: event.target.value});
  }

  changeNotes (event) {
    this.setState({notes: event.target.value});
  }

  changeEmail (event) {
    this.setState({email: event.target.value});
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
