import React from 'react';
import ContactIndexItem from './contact_index_item';
import ContactForm from './contact_form';

class ContactList extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  render() {
    // console.log(this.props);
    const {selectedContacts, editContact, createContact, errors} = this.props;
    const destroyFunctionGenerator = (dcontact) => {
      return () => {this.props.destroyContact(dcontact);};
    };
    let key=1;
    let contactListItems;
    if(selectedContacts && Object.values(selectedContacts).length > 0)
    {
      contactListItems = Object.values(selectedContacts).map(contact => (
          <ContactIndexItem
          name = {contact.name}
          email = {contact.email}
          notes = {contact.notes}
          key = {key++}
          id = {contact.id}
          destroyContact = {destroyFunctionGenerator(contact)}
          />
        )
      );
    }else{
      contactListItems = "";
    }

    return(
      <div>
        <h1 className = "header">All Contacts</h1>
        <div className = "main-box">
          <ul className = "contact-list">
            {contactListItems}
          </ul>
          Create New Contact
          <ContactForm
            submitFunc = {createContact}
            status = "researching"
            />
        </div>
      </div>
    );
  }
}

export default ContactList;
