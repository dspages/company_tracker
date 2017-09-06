import React from 'react';

const DEFAULT_STATE = {status: "pending", info: "", liabilities: "",
valuation: "", outstanding_shares: "", assets: "", gross_income: "",
expenses: "", name: ""};

class FirmForm extends React.Component {
  constructor(props){
    super(props);
    this.state = DEFAULT_STATE;
  }

  submitForm (event) {
    event.preventDefault();
    this.props.createFirm({
      title: this.state.title,
      body: this.state.body}).then(
        () => this.setState(DEFAULT_STATE)
      );
  }

  changeName (event) {
    this.setState({name: event.target.value});
  }

  changeInfo (event) {
    this.setState({info: event.target.value});
  }

  render(){
    return (
      <form className="new-form">Create New Firm
         <br></br>
         <label>Name:
         <input onChange={this.changeName.bind(this)} id="title" type="text"></input>
         </label>
         <label>Info:
         <input onChange={this.changeInfo.bind(this)} id="body" type="text"></input>
         </label>
         <input type="submit" onClick={this.submitForm.bind(this)}></input>
       </form>
    );
  }

}


export default FirmForm;