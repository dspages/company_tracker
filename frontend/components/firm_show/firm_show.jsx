import React from 'react';
import FirmForm from '../firm_index/firm_form';
import { Link } from 'react-router-dom';
import ContactIndexContainer from '../contact/contact_index_container.jsx';

class FirmShow extends React.Component{
  constructor(props){
    super(props);
    // console.log(this.props.match.params.postID);
  }

  componentDidMount(){
    this.props.requestFirm(this.props.match.params.firmID);
    // console.log(this.props.match.params.firmID);
  }

  render(){
    // console.log(this.state);
    if(this.props.firm){
      return (
        <div className="show">
          <Link className="item-part" to={`/`}>
           Return to Home Page
          </Link>
          <h1>Show Page</h1>
          <h1>Name: {this.props.firm.name}</h1>
          <text>Info: {this.props.firm.info}</text>
          <p>Status: {this.props.firm.status}</p>
          Edit Firm
            <FirmForm
            name = {this.props.firm.name}
            status = {this.props.firm.status}
            info = {this.props.firm.info}
            id = {this.props.firm.id}
            submitFunc = {this.props.editFirm}
            />
            <ContactIndexContainer
              id = {this.props.firm.id}
              />
        </div>
      );
    }else{
      return null;
    }
  }
}

export default FirmShow;
