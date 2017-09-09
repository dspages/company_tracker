import React from 'react';
import ContactForm from '../contact/contact_form.jsx';
import { Link } from 'react-router-dom';

class ContactDetailView extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestContact(this.props.match.params.contactID);
  }

  render(){
    if (this.props.contact.id){
      return(
      <div>
        <Link className="item-part" to={`/`}>
         Return to Home Page
        </Link>
        <Link className="item-part" to={`/firms/${this.props.contact.company_id}`}>
         Return to Firm Page
        </Link>
        <div className = "info-list">
          <text>Name: {this.props.contact.name}</text>
          <text>Notes: {this.props.contact.notes}</text>
          <text>Email: {this.props.contact.email}</text>
        </div>
        <ContactForm
          name = {this.props.contact.name}
          notes = {this.props.contact.notes}
          email = {this.props.contact.email}
          company_id = {this.props.contact.company_id}
          id = {this.props.contact.id}
          submitFunc = {this.props.editContact}
          />
      </div>
    );
    }else{
      return null;
    }
  }
}

export default ContactDetailView;
