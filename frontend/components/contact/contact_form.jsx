import React from 'react';

const DEFAULT_STATE = {contact: {name: "", notes: "", email: ""}};

class ContactForm extends React.Component {

  constructor(props){
    super(props);
    this.changeName = this.changeName.bind(this);
    this.changeNotes = this.changeNotes.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm (event) {
    event.preventDefault();
    this.props.submitFunc({
      name: this.props.name,
      notes: this.props.notes,
      email: this.props.email,
      company_id: this.props.company_id,
      id: this.props.id});
  }

  changeName (event) {
    this.props.editContactLocal({name: event.target.value});
  }

  changeNotes (event) {
    this.props.editContactLocal({notes: event.target.value});
  }

  changeEmail (event) {
    this.props.editContactLocal({email: event.target.value});
  }

  render(){
    if(this.props)
    {
      return (<div>
        <form className = "new-form">
          <div className = "new-form-row">
            Contact Form
            {this.props.errors}
           <br></br>
           <label>Name:
           <input value = {this.props.name}
             onChange = {this.changeName} id = "name" type = "text">
           </input>
           </label>
           <label>Notes:
           <input value = {this.props.notes}
             onChange = {this.changeNotes} id = "notes" type = "text">
           </input>
           </label>
           <label>Email:
             <input value = {this.props.email} onChange = {this.changeEmail}/>
          </label>
           <button onClick = {this.submitForm}>Confirm</button>
          </div>
         </form>
      </div>);
    }else{
      return null;
    }
  }

}

export default ContactForm;
