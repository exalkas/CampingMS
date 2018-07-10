import React from 'react';
import { connect } from 'react-redux';
import ClientForm from './ClientForm';
import { startAddClient, startAddClientArchive } from '../actions/actionsClients';
import { firebase} from '../firebase/firebase';

export class AddClientPage extends React.Component {

  state = { uid : firebase.auth().currentUser};

  onSubmit = (client) => {
    if (this.state.uid.email=='rdxtbl@gmail.com' || this.state.uid.email=='dermatakis@gmail.com') {
      this.props.startAddClientArchive(client);
      this.props.history.push('/');
    } else {
      this.props.startAddClient(client);
      this.props.history.push('/');
    }       
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Νέα Άφιξη</h1>
          </div>
        </div>
      <div className="page-header2-colored">
        <div className="content-container">
          <ClientForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddClient: (client) => dispatch(startAddClient(client)),
  startAddClientArchive: (client) => dispatch(startAddClientArchive(client))
});

export default connect(undefined, mapDispatchToProps)(AddClientPage);
