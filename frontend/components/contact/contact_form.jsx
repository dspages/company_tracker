import React from 'react';

const DEFAULT_STATE = {id: "", name: "", notes: "", email: "", company_id: ""};

class ContactForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props;
    console.log(props);
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
         <br></br>
         <label>Name:
         <input value = {this.state.name} onChange = {this.changeName.bind(this)} id = "name" type = "text"></input>
         </label>
         <label>Notes:
         <input value = {this.state.notes} onChange = {this.changeNotes.bind(this)} id = "notes" type = "text"></input>
         </label>
         <label>Email:
           <input value = {this.state.email} onChange = {this.changeEmail.bind(this)}/>
        </label>
         <input type = "submit" onClick = {this.submitForm.bind(this)}></input>
        </div>
       </form>
    </div>);
  }
}

export default ContactForm;
