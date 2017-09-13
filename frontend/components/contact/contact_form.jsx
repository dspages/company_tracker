import React from 'react';

class ContactForm extends React.Component {

  constructor(props){
    super(props);
    this.state = props;
    this.changeName = this.changeName.bind(this);
    this.changeNotes = this.changeNotes.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm (event) {
    event.preventDefault();
    this.props.submitFunc({
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
    return (<div>
      <form className = "new-form">
        <div className = "new-form-row">
          Contact Form
          {this.props.errors}
         <br></br>
         <label>Name:
         <input value = {this.state.name}
           onChange = {this.changeName} id = "name" type = "text">
         </input>
         </label>
         <label>Notes:
         <input value = {this.state.notes}
           onChange = {this.changeNotes} id = "notes" type = "text">
         </input>
         </label>
         <label>Email:
           <input value = {this.state.email} onChange = {this.changeEmail}/>
        </label>
         <button onClick = {this.submitForm}>Confirm</button>
        </div>
       </form>
    </div>);
  }

}

export default ContactForm;
