import React from 'react';
import { connect } from 'react-redux';
import ClientListItem from './ClientListItem';
import selectClients from '../selectors/clients';





export const ClientList = (props) => (
  <div className="content-container">
  <table>
        <tbody>
    <tr>
    <th className="row-item">Όνομα</th>
    <th className="row-item">Επίθετο</th>
    <th className="row-item">Τηλέφωνο</th>
    <th className="row-item">email</th>
    <th className="row-item">Διεύθυνση</th>
    <th className="row-item">Διαβατήριο</th>
    <th className="row-item">Πινακίδες</th>
    <th className="row-item">Άφιξη</th>
    <th className="row-item">Αναχώριση</th>
    </tr>

    {        
        props.client===undefined || props.client.length === 0 ? (
          
           <tr><td><h3>Δεν υπάρχουν καταχωρημένες αφίξεις</h3></td></tr>
          
        ) : (
            props.client.map((client) => {
              return <ClientListItem key={client.id} {...client} />;
            })
          )
     }
  </tbody>
  </table>
  </div>
);

const mapStateToProps = (state) => {
  return {
    client: state.clients//selectClients(state.clients, state.filters)
  };
};

export default connect(mapStateToProps)(ClientList);