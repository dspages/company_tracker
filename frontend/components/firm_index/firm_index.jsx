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

  render() {
    // console.log(this.props);
    const {firms, editFirm, createFirm, errors} = this.props;
    const destroyFunctionGenerator = (dfirm) => {
      return () => {this.props.destroyFirm(dfirm);};
    };
    let key = 1;
    let firmListItems;
    if(Object.values(firms.firmList).length > 0)
    {
      firmListItems = Object.values(firms.firmList);
      firmListItems = firmListItems.map(firm => (
          <FirmIndexItem
          name = {firm.name}
          status = {firm.status}
          key = {key++}
          id = {firm.id}
          destroyFirm = {destroyFunctionGenerator(firm)}
          />
        )
      );
    }else{
      firmListItems = "";
    }
    return(
      <div>
        <h1 className = "header">All Firms</h1>
        <div className = "main-box">
          <ul className = "firm-list">
            {firmListItems}
          </ul>
          <FirmForm
            submitFunc = {createFirm}
            status = "researching"
            />
        </div>
      </div>
    );
  }
}

export default FirmList;
