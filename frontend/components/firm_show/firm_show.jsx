import React from 'react';

class FirmShow extends React.Component{
  constructor(props){
    super(props);
    // console.log(this.props.match.params.postID);
  }

  componentDidMount(){
    this.props.requestFirm(this.props.match.params.firmID);
    console.log(this.props.match.params.firmID);
  }

  render(){
    // console.log(this.props.post);
    if(this.props.firm){
      return (
        <div className="show">
          <h1>Show Page</h1>
          <h1>Name: {this.props.firm.name}</h1>
          <text>Info: {this.props.firm.info}</text>
          <p>Status: {this.props.firm.status}</p>
        </div>
      );
    }else{
      return null;
    }
  }
}

export default FirmShow;
