import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectClients from '../selectors/selectorClients';
import selectClientsTotal, {countDianiktereuseis, countTotal} from '../selectors/clients-total';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

// import { startAddClient, startSetClients, startRemoveClient } from '../actions/actionsClients';
// import database from '../firebase/firebase';
// import { firebase, googleAuthProvider } from '../firebase/firebase';
// import uuid from 'uuid';


export const ClientsSummaryAdmin = ({ clientCount, clientsDianiktereuseis, clientsTotal }) => {
  const clientWord = clientCount === 1 ? 'άφιξη καταχωρημένη' : 'αφίξεις καταχωρημένες';
  const nightsWord = clientsDianiktereuseis === 1 ? 'συνολική διανυκτέρευση' : 'συνολικές διανυκτερεύσεις';
  const totalWord= '€ σύνολο';
  // const uid = firebase.auth().currentUser;

    return (    
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title"><span>{clientCount}</span> {clientWord}</h1>
          <h3>{clientsDianiktereuseis}&nbsp;{nightsWord}&nbsp;| {clientsTotal}{totalWord}</h3>
          <div className="page-header__actions">
            <Link className="button" to="/create">Προσθήκη Άφιξης</Link>
           
            
    
          </div>
        </div>
      </div>
    );
};

const confirmation = () => {
  confirmAlert({
    title: 'Επιβεβαίωση Κλεισίματος',
    message: 'Κάνοντας κλείσιμο της ημέρας, θα βγείτε αυτόματα από το σύστημα!'+'\n'+'Είστε βέβαιοι ότι θέλετε να εκτελέσετε αυτή την ενέργεια;',
    buttons: [
      {
        label: 'Ναι',
        onClick: () => { //console.log("Confirmation received!");
                      klisimoHandler()}
      },
      {
        label: 'Όχι',
        onClick: () => undefined
      }
    ]
  })
};


const klisimoHandler = () => {
   visibleClients.forEach((record) => {
     //console.log(record);  
    // console.log("Will send id="+record.id);
    //  startAddClient({record});
    //  startRemoveClient({ id: record.id });

    database.ref(`clients/${record.id}`).remove().then(() => {
      //console.log("Item removed ok!");
    }).catch(function(error) {
      console.log("Remove failed: " + error.message)
    });

    database.ref(`clientsArchive`).push(record).then((ref) => {
      
      //console.log("Well add client should be done by now");
    }).catch(function(error) {
      console.log("Add client failed: " + error.message)
    });


   });
   firebase.auth().signOut();
  };

let visibleClients;

const mapStateToProps = (state) => {
  visibleClients = selectClients(state.clients, state.filters);

  return {
    clientCount: visibleClients.length,
    clientsTotal: selectClientsTotal(visibleClients),
    clientsDianiktereuseis: countDianiktereuseis(visibleClients),
    clientsTotal: countTotal(visibleClients)
  };
};

//---------------------
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
  
  // startRemoveClient: (data) => dispatch(startRemoveClient(data))
});
//-------------------

export default connect(mapStateToProps, mapDispatchToProps)(ClientsSummaryAdmin);