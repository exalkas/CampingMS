import moment from 'moment';

// Filters Reducer

const filtersReducerDefaultState = {
  surname: '',
  telephone:'',
  docID:'',
  plates:'',
  notes:'',
  startArrDate: undefined,  //moment().startOf('month'),
  endArrDate:  undefined, //moment().endOf('month'),
  startDepDate: undefined, //moment().startOf('month'),
  endDepDate: undefined //moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_SURNAME_FILTER':
      return {
        ...state,
        surname: action.surname
      };

      case 'SET_TELEPHONE_FILTER':
      return {
        ...state,
        telephone: action.telephone
      };
      case 'SET_DOC_ID_FILTER':
      return {
        ...state,
        docID: action.docID
      };
      case 'SET_PLATES_FILTER':
      return {
        ...state,
        plates: action.plates
      };
      case 'SET_NOTES_FILTER':
      return {
        ...state,
        notes: action.notes
      };
      case 'SET_ARR_START_DATE':
      return {
        ...state,
        startArrDate: action.startArrDate
      };

    case 'SET_ARR_END_DATE':
      return {
        ...state,
        endArrDate: action.endArrDate
      };

      case 'SET_DEP_START_DATE':
      return {
        ...state,
        startDepDate: action.startDepDate
      };
    case 'SET_DEP_END_DATE':
      return {
        ...state,
        endDepDate: action.endDepDate
      };

    default:
      return state;
  }
  
};
