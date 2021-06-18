const initialState = {}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
   case 'LOGOUT_REQ':
     return{
      ...state,
      userID: null
     }
   case 'ADD_CATEGORY':
     return{
       ...state,
       category: action.payload.category
     } 
   case 'GET_SUCC':
     return{
       ...state,
       [action.payload.category]: 
        action.payload.data.things
       
     }
   case 'REGISTER_SUCC':
     return{
       ...state,
       userID: action.payload.data._id
     }
   case 'AUTHENTICATE_SUCC':
     return{
       ...state,
       userID: action.payload.data._id
     } 
   case 'REMOVE_THING':
     return {
         ...state,
         [action.payload.category]: [
             ...state[action.payload.category].filter(item => item.id 
             !== action.payload.id),
         ],
     };
   case 'ADD_THING':
     return {
         ...state,
         [action.payload.category]: 
         [...state[action.payload.category],
          action.payload.thing
        ],
     };
     default:
         return state;
  }; 
}

export default rootReducer