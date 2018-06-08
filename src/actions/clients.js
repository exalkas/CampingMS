import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_CLIENT
export const addClient = (client) => ({
  type: 'ADD_CLIENT',
  client
});

export const startAddClient = (clientData = {}) => {
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
      prizesPrice='',
      prizesSumMoney='',
      notes='',
      thesi='',
      total=''
    } = clientData;
    const client = { telephone, email, name, fathername, surname, address, docID, plates, arrivalDate, departureDate, 
      adultsNum, adultsPrice, adultsSumMoney, childrenNum,childrenPrice, childrenSumMoney, carsNum, carsPrice, carsSumMoney, 
      motosNum, motosPrice, motosSumMoney, caravansNum, caravansPrice, caravansSumMoney, skinesSmallNum, skinesSmallPrice, skinesSmallSumMoney, 
      skinesBigNum, skinesBigPrice, skinesBigSumMoney, pulmansNum, pulmansPrice, pulmansSumMoney, skafiNum, skafiPrice, skafiSumMoney, 
      prizesNum, prizesSumMoney, notes, thesi, total};

    return database.ref(`clients`).push(client).then((ref) => {
      dispatch(addClient({
        id: ref.key,
        ...client
      }));
    });
  };
};

// REMOVE_CLIENT
export const removeClient = ({ id } = {}) => ({
  type: 'REMOVE_CLIENT',
  id
});

export const startRemoveClient = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`clients/${id}`).remove().then(() => {
      dispatch(removeClient({ id }));
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`clients/${id}`).update(updates).then(() => {
      dispatch(editClient(id, updates));
    });
  };
};

// SET_CLIENTS
export const setClients = (clients) => ({
  type: 'SET_CLIENTS',       
  clients
});

export const startSetClients = () => {
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
