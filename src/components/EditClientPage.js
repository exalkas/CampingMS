import React from 'react';
import { connect } from 'react-redux';
import ClientForm from './ClientForm';
import { startEditClient, startRemoveClient,startEditClientArchive, startRemoveClientArchive } from '../actions/actionsClients';
import { firebase} from '../firebase/firebase';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css



export class EditClientPage extends React.Component {
  
  // uid=firebase.auth().currentUser;
  state = { uid : firebase.auth().currentUser};


  onSubmit = (client) => {

    //console.log(this.state.uid.email);
    //console.log(this.props.client.id);

    if (this.state.uid.email!='roviescamping@gmail.com') {
    // if (this.state.uid.email=='rdxtbl@gmail.com' || this.state.uid.email=='dermatakis@gmail.com') {
      this.props.startEditClientArchive(this.props.client.id, client);
      this.props.history.push('/');  
    } else {
      this.props.startEditClient(this.props.client.id, client);
      this.props.history.push('/');  
    }
  };
  onRemove = () => {

    if (this.state.uid.email=='rdxtbl@gmail.com' || this.state.uid.email=='dermatakis@gmail.com') {
      this.props.startRemoveClientArchive({ id: this.props.client.id });
      this.props.history.push('/');
    } else {
      this.props.startRemoveClient({ id: this.props.client.id });
      this.props.history.push('/');
    }
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
  startRemoveClient: (data) => dispatch(startRemoveClient(data)),
  startEditClientArchive: (id, client) => dispatch(startEditClientArchive(id, client)),
  startRemoveClientArchive: (data) => dispatch(startRemoveClientArchive(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditClientPage);
