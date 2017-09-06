import React from 'react';
import merge from 'lodash/merge';
import { Link } from 'react-router-dom';

class FirmIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

   render(){
    //  console.log(this.props);
     return(
       <li className="post-index-item">
          <Link className="item-part" to={`/firms/${this.props.id}`}>
           {this.props.name}
         </Link>

         <Link className="item-part" to={`/firms/${this.props.id}/edit`}>
          Edit Firm
        </Link>
          <button className="item-part" onClick={this.props.destroyFirm}> Delete
        </button>
       </li>
     );
   }
}

export default FirmIndexItem;
