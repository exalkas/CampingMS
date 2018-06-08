import moment from 'moment';

// Filters Reducer

const filtersReducerDefaultState = {
  surname: '',
  telephone:'',
  docID:'',
  plates:'',
  sortBy: 'email' 
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

      case 'SORT_BY_SURNAME':
      return {
        ...state,
        sortBy: 'surname'
      };
    case 'SORT_BY_EMAIL':
      return {
        ...state,
        sortBy: 'email'
      };

    default:
      return state;
  }
  
};
