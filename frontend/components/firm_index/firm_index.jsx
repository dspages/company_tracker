import React from 'react';
import FirmIndexItem from './firm_index_item';
import FirmForm from './firm_form';

class FirmList extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestFirms();
  }

  make_array(obj){
    let out = [];
    let keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      out.push(obj[keys[i]]);
    }
    return out;
  }

  render() {
    // console.log(this.props);
    const {firms, editFirm, createFirm, errors} = this.props;
    const destroyFunctionGenerator = (dfirm) => {
      return () => {this.props.destroyFirm(dfirm);};
    };
    let firmListItems;
    if(Object.keys(firms.firmList).length>0)
    {
      firmListItems = this.make_array(firms.firmList).map(firm => (
          <FirmIndexItem
          name = {firm.name}
          status = {firm.status}
          key = {firm.id}
          id = {firm.id}
          destroyFirm = {destroyFunctionGenerator(firm)}
          />
        )
      );
    }else{
      firmListItems="";
    }

    return(
      <div>
        <h1 className = "header">All Firms</h1>
        <div className = "main-box">
          <ul className = "firm-list">
            {firmListItems}
          </ul>
          <FirmForm
            createFirm = {createFirm}
            />
        </div>
      </div>
    );
  }
}

export default FirmList;
