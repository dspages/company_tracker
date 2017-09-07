import React from 'react';
import ContactIndexItem from './contact_index_item';
import ContactForm from './contact_form';

class ContactList extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.selectedContacts();
  }

  render() {
    // console.log(this.props);
    const {contacts, editContact, createContact, errors} = this.props;
    const destroyFunctionGenerator = (dcontact) => {
      return () => {this.props.destroyContact(dcontact);};
    };
    let key=1;
    let contactListItems;
    if(Object.values(contacts.contactList).length > 0)
    {
      contactListItems = Object.values(contacts.contactList).map(contact => (
          <ContactIndexItem
          name = {contact.name}
          status = {contact.status}
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
