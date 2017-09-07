import React from 'react';

const DEFAULT_STATE = {id: "", status: "researching", info: "", name: "",
  contacts: [], finances: []};

class FirmForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props;
  }

  componentDidMount(){
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
        <div className = "new-firm-column">
         <br></br>
         <label>Name:
         <input value = {this.state.name} onChange = {this.changeName.bind(this)} id = "name" type = "text"></input>
         </label>
         <label>Info:
         <input value = {this.state.info} onChange = {this.changeInfo.bind(this)} id = "info" type = "text"></input>
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
       </form>
    );
  }

}


export default FirmForm;
