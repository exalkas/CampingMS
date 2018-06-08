// SET_NAME_FILTER
export const setSurnameFilter = (surname = '') => ({
  type: 'SET_SURNAME_FILTER',
  surname
});

// SET_TELEPHONE_FILTER
export const setTelephoneFilter = (telephone) => ({
  type: 'SET_TELEPHONE_FILTER',
  telephone
});

// SET_DOC_ID_FILTER
export const setDocIDFilter = (docID) => ({
  type: 'SET_DOC_ID_FILTER',
  docID
});

// SET_PLATES_FILTER
export const setPlatesFilter = (plates) => ({
  type: 'SET_PLATES_FILTER',
  plates
});

// SORT_BY_SURNAME
export const sortBySurname = () => ({
  type: 'SORT_BY_SURNAME'
});

// SORT_BY_EMAIL
export const sortByEmail = () => ({
  type: 'SORT_BY_EMAIL'
});

// // SET_TEXT_FILTER
// export const setTextFilter = (text = '') => ({
//   type: 'SET_TEXT_FILTER',
//   text
// });

// // SORT_BY_DATE
// export const sortByDate = () => ({
//   type: 'SORT_BY_DATE'
// });

// // SORT_BY_AMOUNT
// export const sortByAmount = () => ({
//   type: 'SORT_BY_AMOUNT'
// });

// // SET_START_DATE
// export const setStartDate = (startDate) => ({
//   type: 'SET_START_DATE',
//   startDate
// });

// // SET_END_DATE
// export const setEndDate = (endDate) => ({
//   type: 'SET_END_DATE',
//   endDate
// });
