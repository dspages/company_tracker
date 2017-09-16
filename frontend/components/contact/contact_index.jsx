import React from 'react';
import ContactIndexItem from './contact_index_item';
import ContactForm from './contact_form';

class ContactList extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    const { editContactLocal, selectedContacts,
      editContact, createContact, errors } = this.props;
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
          company_id = {this.props.id}
          destroyContact = {destroyFunctionGenerator(contact)}
          editContact = {editContact}
          />
        )
      );
    }else{
      contactListItems = "";
    }

    return(
      <div>
        <h1 className = "header">Firm Contacts</h1>
        <div className = "main-box">
          <ul className = "contact-list">
            {contactListItems}
          </ul>
          <ContactForm
            name = {this.props.contact.name}
            notes = {this.props.contact.notes}
            email = {this.props.contact.email}
            editContactLocal = {editContactLocal}
            submitFunc = {createContact}
            company_id = {this.props.id}
            />
        </div>
      </div>
    );
  }

}

export default ContactList;
