import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import selectClients from '../selectors/clients';
import selectClientsTotal from '../selectors/clients-total';

export const ClientsSummary = ({ clientCount, clientsTotal }) => {
  const clientWord = clientCount === 1 ? 'άφιξη καταχωρημένη' : 'αφίξεις καταχωρημένες';


  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title"><span>{clientCount}</span> {clientWord}</h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Προσθήκη Άφιξης</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleClients = selectClients(state.clients, state.filters);

  return {
    clientCount: visibleClients.length,
    clientsTotal: selectClientsTotal(visibleClients)
  };
};

export default connect(mapStateToProps)(ClientsSummary);
