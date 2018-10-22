import React from 'react';
import { connect } from 'react-redux';
import ClientForm from './ClientForm';
import { startAddClient, startAddClientArchive } from '../actions/actionsClients';
import { firebase} from '../firebase/firebase';
import * as emailjs from 'emailjs-com';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import axios from 'axios';


//const {sendEmail}=require('../../server/utils/mail/mailer');

export class AddClientPage extends React.Component {

  state = { uid : firebase.auth().currentUser};


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
//
//

  onSubmit = (client) => {
    
        
    confirmAlert({
      title:'Αποστολή email',
      message:'Θέλετε να αποστείλετε email καλωσορίσματος στο νέο πελάτη;',
      buttons: [
        {
          label: 'Ναι',
          onClick: () => this.sendMail(client)
        },
        {
          label:'Όχι',
          onClick: () => this.writeToDB(client)
        }
      ]
    })

    
     
  };

  writeToDB(client) {
    if (this.state.uid.email==process.env.ADMIN_EMAIL || this.state.uid.email==process.env.OWNER_EMAIL) {
      this.props.startAddClientArchive(client);
      this.props.history.push('/');
    } else {
      this.props.startAddClient(client);
      this.props.history.push('/');
    }  

    this.writeToMailchimp(client);
  }

  sendMail(client) {
    // sendEmail('alkas@alkas.gr','alkis',null,'Welcome');

    const templateParams = {
      name: client.name,
      email: client.email
  };

    emailjs.send("gmail", "template_SKf5KQeL", templateParams, 'user_IPaEV6HjcJHbCR8HzETYY')
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

    this.writeToDB(client);
    
  }

  async writeToMailchimp(client){
    const config={
      auth:
      {
        user: 'anystring',
        pass: '9eaf9d4ce3fe0019c06c7d416087a5ec-us11' //this is my API key
      },
    crossDomain: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      }
    };

    const contact={
      "email_address": client.email,
      "status": "subscribed",
     "merge_fields": {
             "FNAME": client.name,
             "LNAME": client.surname,
             "ADDRESS": client.address,
             "PHONE": client.telephone
             }
    };

    try {
      const response = await axios.post(process.env.MAILCHIMP_URL, contact,config);
      console.log(response);
   } catch (err) {
      console.log(err);
   }

  }

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
