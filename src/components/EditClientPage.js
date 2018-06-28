import React from 'react';
import { connect } from 'react-redux';
import ClientForm from './ClientForm';
import { startEditClient, startRemoveClient } from '../actions/actionsClients';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css



export class EditClientPage extends React.Component {
  onSubmit = (client) => {
    this.props.startEditClient(this.props.client.id, client);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveClient({ id: this.props.client.id });
    this.props.history.push('/');
  };

  confirmation = () => {
    confirmAlert({
      title: 'Επιβεβαίωση διαγραφής',
      message: 'Είστε βέβαιοι ότι θέλετε να διαγράψετε την άφιξη αυτή;',
      buttons: [
        {
          label: 'Ναι',
          onClick: () => this.onRemove()
        },
        {
          label: 'Όχι',
          onClick: () => undefined
        }
      ]
    })
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Αλλαγή Άφιξης {this.props.client.name} {this.props.client.surname}</h1>            
          </div>
        </div>
        <div className="page-header2-colored">
          <div className="content-container">
            <ClientForm
              client={this.props.client}
              onSubmit={this.onSubmit}
            />
            <button className="button button--delete" onClick={this.confirmation}>Διαγραφή Άφιξης</button>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  client: state.clients.find((client) => client.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditClient: (id, client) => dispatch(startEditClient(id, client)),
  startRemoveClient: (data) => dispatch(startRemoveClient(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditClientPage);
