// SET_SURNAME_FILTER
export const setSurnameFilter = (surname = '') => ({
  type: 'SET_SURNAME_FILTER',
  surname
});

// SET_TELEPHONE_FILTER
export const setTelephoneFilter = (telephone='') => ({
  type: 'SET_TELEPHONE_FILTER',
  telephone
});

// SET_DOC_ID_FILTER
export const setDocIDFilter = (docID='') => ({
  type: 'SET_DOC_ID_FILTER',
  docID
});

// SET_NOTES_FILTER
export const setNotesFilter = (notes='') => ({
  type: 'SET_NOTES_FILTER',
  notes
});

// SET_PLATES_FILTER
export const setPlatesFilter = (plates='') => ({
  type: 'SET_PLATES_FILTER',
  plates
});

// SET_ARR_START_DATE
export const setArrStartDate = (startArrDate) => ({
  type: 'SET_ARR_START_DATE',
  startArrDate
});

// SET_ARR_END_DATE
export const setArrEndDate = (endArrDate) => ({
  type: 'SET_ARR_END_DATE',
  endArrDate
});

// SET_DEP_START_DATE
export const setDepStartDate = (startDepDate) => ({
  type: 'SET_DEP_START_DATE',
  startDepDate
});

// SET_DEP_END_DATE
export const setDepEndDate = (endDepDate) => ({
  type: 'SET_DEP_END_DATE',
  endDepDate
});