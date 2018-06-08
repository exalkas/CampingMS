import moment from 'moment';

// Get visible clients

export default (clients, { surname, telephone, docID, plates, sortBy }) => {
  return clients.filter((client) => {
    const createdAtMoment = moment(client.arrivalDate);

    const textMatch = client.surname.toLowerCase().includes(surname.toLowerCase());

    return textMatch;
  }).sort((a, b) => {
    if (sortBy === 'surname') {
      return a.surname < b.surname ? 1 : -1;
    } else if (sortBy === 'email') {
      return a.email < b.email ? 1 : -1;
    }
  });
};
