import React from 'react';
import { connect } from 'react-redux';

import selectClients from '../selectors/selectorClients';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Link } from 'react-router-dom';
import moment from 'moment';


export const ClientList = (props) =>  (
  
  <div className="page-header2-colored">
    <div className="content-container">
    {
      props.client===undefined || props.client.length === 0 ? (
        <h3>Δεν υπάρχουν καταχωρημένες αφίξεις</h3>        
        ) : (
          <ReactTable className="content-container"
          data={props.client}
          columns={[
            {Header:"Όνομα",
            accessor:"name"},
            {Header:"Επίθετο",
            accessor:"surname"},
            {Header:"Τηλέφωνο",
            accessor:"telephone"},
            {Header:"email",
            accessor:"email"},
            {Header:"Άφιξη",
            accessor: "arrivalDate",
            Cell: ({value}) => (moment(value).format('DD/MM/YY'))},
            {Header:"Αναχώριση",
            accessor:"departureDate",
            Cell: ({value}) => (moment(value).format('DD/MM/YY'))},
            {Header:"Ημέρες Διαμονής",
            accessor:"imeresDiamonis"},
            {Header:"Διανυκτερεύσεις",
            accessor:"dianikterefseis"},
            {Header:"Παρατηρήσεις",
            accessor:"notes"},
            {Header:"Σύνολο €",
            accessor:"total"},
            {id:"edit",
            accessor:"id",
            Cell: ({value}) => (<Link className="list-item" to={`/edit/${value}`}><button className="button-container">Αλλαγή</button></Link>)} 
            ]}
            />
        )
    }
    </div>
  </div>
)


  

const mapStateToProps = (state) => {

  return {
    //client: state.clients//selectClients(state.clients, state.filters)
    client: selectClients(state.clients, state.filters)
  };
};

export default connect(mapStateToProps)(ClientList);