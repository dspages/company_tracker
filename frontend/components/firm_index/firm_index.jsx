import React from 'react';
import FirmIndexItem from './firm_index_item';
import FirmForm from './firm_form';

class FirmList extends React.Component {

  constructor(props){
    super(props);
    this.state = {searchVal: ""};
    this.changeSearchVal = this.changeSearchVal.bind(this);
  }

  componentDidMount() {
    this.props.requestFirms();
  }

  changeSearchVal(event){
    this.setState({searchVal: event.target.value});
  }

  searchFilter(firm){//Returns FALSE if item is excluded by search criteria
    return firm.name.toLowerCase().indexOf(
      this.state.searchVal.toLowerCase()) !== -1;
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
      firmListItems = firmListItems.filter(firm => this.searchFilter(firm));
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
        <label>Search:
          <input value={this.state.searchVal} onChange={this.changeSearchVal}>
          </input>
        </label>
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
