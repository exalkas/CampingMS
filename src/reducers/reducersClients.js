// Clients Reducer

const clientsReducerDefaultState = [];

export default (state = clientsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_CLIENT':
      return [
        ...state,
        action.client
      ];

    case 'ADD_CLIENT_ARCHIVE':
    return [
      ...state,
      action.client
    ];

    case 'REMOVE_CLIENT':
      return state.filter(({ id }) => id !== action.id);

    case 'REMOVE_CLIENT_ARCHIVE':
    // console.log("Reducer remove client archive here");
    return state.filter(({ id }) => id !== action.id);  
   
    case 'EDIT_CLIENT':
      return state.map((client) => {
        if (client.id === action.id) {
          return {
            ...client,
            ...action.updates
          };
        } else {
          return client;
        };
      });

    case 'EDIT_CLIENT_ARCHIVE':
    return state.map((client) => {
      if (client.id === action.id) {
        return {
          ...client,
          ...action.updates
        };
      } else {
        return client;
      };
    });      

    case 'SET_CLIENTS':
      return action.clients;
    case 'SET_CLIENTS_ARCHIVE':
    return action.clients;
    default:
      return state;
  }
};
