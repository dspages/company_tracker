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
    let out=[];
    let keys=Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      out.push(obj[keys[i]]);
    }
    return out;
  }

  render() {
    // console.log(this.props);
    const { firms, editFirm, createFirm, errors } = this.props;
    const destroyFirm=(dfirm)=>{
      return ()=>{this.props.destroyFirm(dfirm);};
    };
    let firmItems;
    if(Object.keys(firms.firmList).length>0)
    {
      firmItems = this.make_array(firms.firmList).map(firm => (
          <FirmIndexItem
          title={firm.title}
          key={firm.id}
          id={firm.id}
          destroyFirm={destroyFirm(firm)}
          />
        )
      );
    }else{
      firmItems="";
    }

    return(
      <div>
        <h1 className="header">All Firms</h1>
        <div className = "main-box">
          <ul className="firm-list">
            { firmItems }
          </ul>
          <FirmForm
            createFirm={createFirm}
            />
        </div>
      </div>
    );
  }
}

export default FirmList;
