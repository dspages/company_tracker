import React from 'react';
import Finance from '../finance/finance';
import Contact from '../contact/contact';

const DEFAULT_STATE = {id: "", status: "researching", info: "", name: "",
  contacts: [], finances: []};

class FirmForm extends React.Component {
  constructor(props){
    super(props);
    this.state = DEFAULT_STATE;
  }

  submitForm (event) {
    event.preventDefault();
    this.props.createFirm({
      name: this.state.name,
      info: this.state.info,
      status: this.state.status},
      this.state.contacts,
      this.state.finances).then(
        () => this.setState(DEFAULT_STATE)
      );
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
      <form className = "new-form">Create New Firm
        <div className = "new-firm-column">
         <br></br>
         <label>Name:
         <input onChange = {this.changeName.bind(this)} id = "title" type = "text"></input>
         </label>
         <label>Info:
         <input onChange = {this.changeInfo.bind(this)} id = "body" type = "text"></input>
         </label>
         <label>Status:
           <select value = {this.state.status} onChange = {this.changeStatus.bind(this)}>
            <option value = "researching">Researching</option>
            <option value = "pending">Pending</option>
            <option value = "approved">Approved</option>
            <option value = "denied">Denied</option>
          </select>
        </label>
         <input type = "submit" onClick = {this.submitForm.bind(this)}></input>
        </div>
        <div className = "new-firm-column">

        </div>
        <div className = "new-firm-column">

        </div>
       </form>
    );
  }

}


export default FirmForm;
