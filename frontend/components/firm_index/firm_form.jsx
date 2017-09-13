import React from 'react';

class FirmForm extends React.Component {

  constructor(props){
    super(props);
    this.state = props;
    this.changeName = this.changeName.bind(this);
    this.changeInfo = this.changeInfo.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm (event) {
    event.preventDefault();
    this.props.submitFunc({
      name: this.state.name,
      info: this.state.info,
      status: this.state.status,
      id: this.state.id},
      this.state.contacts,
      this.state.finances);
  }

  changeName (event) {
    this.setState({name: event.target.value});
  }

  changeInfo (event) {
    this.setState({info: event.target.value});
  }

  changeStatus (event) {
    this.setState({status: event.target.value});
  }

  render(){
    return (
      <form className = "new-form">
        <div className = "new-form-row">
          Firm Form
          {this.props.errors}
         <br></br>
         <label>Name:
         <input value = {this.state.name} onChange = {this.changeName} id = "name" type = "text"></input>
         </label>
         <label>Info:
         <textarea value = {this.state.info} onChange = {this.changeInfo} id = "info" type = "textarea"></textarea>
         </label>
         <label>Status:
           <select value = {this.state.status} onChange = {this.changeStatus}>
            <option value = "researching">Researching</option>
            <option value = "pending">Pending</option>
            <option value = "approved">Approved</option>
            <option value = "denied">Denied</option>
          </select>
        </label>
         <button onClick = {this.submitForm}>Confirm</button>
        </div>
       </form>
    );
  }

}


export default FirmForm;
