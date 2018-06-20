import moment from 'moment';

// Get visible clients

export default (clients, { surname, telephone, docID, plates, startArrDate,endArrDate,startDepDate, endDepDate }) => {
  return clients.filter((client) => {
    
    const createdArrDate = moment(client.arrivalDate);
    const createdDepDate = moment(client.departureDate);

    const startArrDateMatch = startArrDate ? startArrDate.isSameOrBefore(createdArrDate, 'day') : true; 
    const endArrDateMatch = endArrDate ? endArrDate.isSameOrAfter(createdArrDate, 'day') : true;

    const startDepDateMatch = startDepDate ? startDepDate.isSameOrBefore(createdDepDate, 'day') : true; 
    const endDepDateMatch = endDepDate ? endDepDate.isSameOrAfter(createdDepDate, 'day') : true;


    const surnameMatch = client.surname.toLowerCase().includes(surname.toLowerCase());
    const telephoneMatch = client.telephone.toLowerCase().includes(telephone.toLowerCase());
    const docIDMatch = client.docID.toLowerCase().includes(docID.toLowerCase());
    const platesMatch = client.plates.toLowerCase().includes(plates.toLowerCase());

    return surnameMatch && telephoneMatch && docIDMatch && platesMatch && startArrDateMatch && endArrDateMatch && startDepDateMatch && endDepDateMatch;
  })
};
