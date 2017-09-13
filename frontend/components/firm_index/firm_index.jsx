import React from 'react';
import FirmIndexItem from './firm_index_item';
import FirmForm from './firm_form';

class FirmList extends React.Component {

  constructor(props){
    super(props);
    this.state = {searchVal: "", filter: "all"};
    this.changeSearchVal = this.changeSearchVal.bind(this);
    this.changeStatusFilter = this.changeStatusFilter.bind(this);
  }

  componentDidMount() {
    this.props.requestFirms();
  }

  changeSearchVal(event){
    this.setState({searchVal: event.target.value});
  }

  changeStatusFilter(event){
    this.setState({filter: event.target.value});
  }

//returns FALSE if item is excluded by search criteria
  searchFilter(firm){
    return firm.name.toLowerCase().indexOf(
      this.state.searchVal.toLowerCase()) !== -1;
  }

//returns FALSE if item is excluded by filter criteria
  statusFilter(firm){
    return this.state.filter === "all" ||
    firm.status === this.state.filter;
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
      firmListItems = firmListItems.filter(firm => this.statusFilter(firm));
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
        <label>Choose by:
          <select value = {this.state.filter} onChange = {this.changeStatusFilter}>
           <option value = "all">All</option>
           <option value = "researching">Researching</option>
           <option value = "pending">Pending</option>
           <option value = "approved">Approved</option>
           <option value = "denied">Denied</option>
         </select>
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
