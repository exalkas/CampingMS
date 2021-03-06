import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_CLIENT
export const addClient = (client) => ({
  type: 'ADD_CLIENT',
  client
});

export const startAddClient = (clientData = {}) => {
  //console.log("Add Client action!");
  //console.log(clientData);

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      telephone = '',
      email = '',
      name = '',
      fathername = '',
      surname = '',
      address = '',
      docID = '',
      plates = '',
      arrivalDate = '',
      departureDate= '',
      adultsNum= '',
      adultsPrice='',
      adultsSumMoney='',
      childrenNum= '',
      childrenPrice='',
      childrenSumMoney='',
      carsNum= '',
      carsPrice='',
      carsSumMoney='',
      motosNum= '',
      motosPrice='',
      motosSumMoney='',
      caravansNum= '',
      caravansPrice='',
      caravansSumMoney='',
      skinesSmallNum= '',
      skinesSmallPrice='',
      skinesSmallSumMoney='',
      skinesBigNum= '',
      skinesBigPrice='',
      skinesBigSumMoney='',
      pulmansNum= '',
      pulmansPrice='',
      pulmansSumMoney='',
      skafiNum= '',
      skafiPrice='',
      skafiSumMoney='',
      prizesNum= '',
      prizesPrice= '',
      prizesSumMoney= '',
      notes='',
      thesi='',
      dianikterefseis='',
      imeresDiamonis='',
      totalPerDay='',
      total=''
    } = clientData;
    const client = { telephone, email, name, fathername, surname, address, docID, plates, arrivalDate, departureDate, 
      adultsNum, adultsPrice, adultsSumMoney, childrenNum,childrenPrice, childrenSumMoney, carsNum, carsPrice, carsSumMoney, 
      motosNum, motosPrice, motosSumMoney, caravansNum, caravansPrice, caravansSumMoney, skinesSmallNum, skinesSmallPrice, skinesSmallSumMoney, 
      skinesBigNum, skinesBigPrice, skinesBigSumMoney, pulmansNum, pulmansPrice, pulmansSumMoney, skafiNum, skafiPrice, skafiSumMoney, 
      prizesNum, prizesPrice, prizesSumMoney, notes, thesi, imeresDiamonis, dianikterefseis,totalPerDay,total};

    return database.ref(`clients`).push(client).then((ref) => {
      dispatch(addClient({
        id: ref.key,
        ...client
      }));
    });
  };
};

export const startAddClientArchive = (clientData = {}) => {
  // console.log("Add Client Archive action!");
  // console.log(clientData);

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      telephone = '',
      email = '',
      name = '',
      fathername = '',
      surname = '',
      address = '',
      docID = '',
      plates = '',
      arrivalDate = '',
      departureDate= '',
      adultsNum= '',
      adultsPrice='',
      adultsSumMoney='',
      childrenNum= '',
      childrenPrice='',
      childrenSumMoney='',
      carsNum= '',
      carsPrice='',
      carsSumMoney='',
      motosNum= '',
      motosPrice='',
      motosSumMoney='',
      caravansNum= '',
      caravansPrice='',
      caravansSumMoney='',
      skinesSmallNum= '',
      skinesSmallPrice='',
      skinesSmallSumMoney='',
      skinesBigNum= '',
      skinesBigPrice='',
      skinesBigSumMoney='',
      pulmansNum= '',
      pulmansPrice='',
      pulmansSumMoney='',
      skafiNum= '',
      skafiPrice='',
      skafiSumMoney='',
      prizesNum= '',
      prizesPrice= '',
      prizesSumMoney= '',
      notes='',
      thesi='',
      imeresDiamonis='',
      dianikterefseis='',
      totalPerDay='',
      total=''
    } = clientData;
    const client = { telephone, email, name, fathername, surname, address, docID, plates, arrivalDate, departureDate, 
      adultsNum, adultsPrice, adultsSumMoney, childrenNum,childrenPrice, childrenSumMoney, carsNum, carsPrice, carsSumMoney, 
      motosNum, motosPrice, motosSumMoney, caravansNum, caravansPrice, caravansSumMoney, skinesSmallNum, skinesSmallPrice, skinesSmallSumMoney, 
      skinesBigNum, skinesBigPrice, skinesBigSumMoney, pulmansNum, pulmansPrice, pulmansSumMoney, skafiNum, skafiPrice, skafiSumMoney, 
      prizesNum, prizesPrice, prizesSumMoney, notes, thesi, imeresDiamonis, dianikterefseis,totalPerDay, total};

    return database.ref(`clientsArchive`).push(client).then((ref) => {
      dispatch(addClientArchive({
        id: ref.key,
        ...client
      }));
    });
  };
};

// ADD_CLIENT_ARCHIVE
export const addClientArchive = (client) => ({
  type: 'ADD_CLIENT_ARCHIVE',
  client
});

// REMOVE_CLIENT
export const removeClient = ({ id } = {}) => ({
  type: 'REMOVE_CLIENT',
  id
});

export const startRemoveClient = ({ id } = {}) => {
  // console.log("Remove Client action! id="+id);

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`clients/${id}`).remove().then(() => {
      dispatch(removeClient({ id }));
      //console.log("Item removed ok!");
    }).catch(function(error) {
      console.log("Remove failed: " + error.message)
    });
  };
};

// REMOVE_CLIENT_ARCHIVE
export const removeClientArchive = ({ id } = {}) => ({
  type: 'REMOVE_CLIENT_ARCHIVE',
  id
});

export const startRemoveClientArchive = ({ id } = {}) => {
  // console.log("Remove Client Archive action! id="+id);

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`clientsArchive/${id}`).remove().then(() => {
      dispatch(removeClientArchive({ id }));
      // console.log("Item removed ok!");
    }).catch(function(error) {
      console.log("Remove Client from Archive failed: " + error.message)
    });
  };
};

// EDIT_CLIENT
export const editClient = (id, updates) => ({
  type: 'EDIT_CLIENT',
  id,
  updates
});

export const startEditClient = (id, updates) => {
 // console.log("Edit Client action! id="+id);

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`clients/${id}`).update(updates).then(() => {
      dispatch(editClient(id, updates));
    });
  };
};

// EDIT_CLIENT_ARCHIVE
export const editClientArchive = (id, updates) => ({
  type: 'EDIT_CLIENT_ARCHIVE',
  id,
  updates
});

export const startEditClientArchive = (id, updates) => {
 // console.log("Edit Client Archive action! id="+id);

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`clientsArchive/${id}`).update(updates).then(() => {
      dispatch(editClientArchive(id, updates));
    });
  };
};

// SET_CLIENTS
export const setClients = (clients) => ({
  type: 'SET_CLIENTS',       
  clients
});

export const startSetClients = () => {
  //console.log("Set Clients action!");

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`clients`).once('value').then((snapshot) => {
      const clients = [];

      snapshot.forEach((childSnapshot) => {
        clients.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setClients(clients));
    });
  };
};

// SET_CLIENTS_ARCHIVE
export const setClientsArchive = (clients) => ({
  type: 'SET_CLIENTS_ARCHIVE',       
  clients
});

export const startSetClientsArchive = () => {
  //console.log("Set Clients Archive action!");

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`clientsArchive`).once('value').then((snapshot) => {
      const clients = [];

      snapshot.forEach((childSnapshot) => {
        clients.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setClientsArchive(clients));
    });
  };
};
