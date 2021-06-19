const initialState = {}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
   case 'ADD_SUCC' :
     return{
      ...state,
      [action.payload.category]: 
      [...state[action.payload.category],
       action.payload.data
     ],
     }
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
   case 'REMOVE_SUCC':
     return {
         ...state,
         [action.payload.category]:[
         ...state[action.payload.category].filter(item => item._id 
         !== action.payload.id),
         ]
     };
     default:
         return state;
  }; 
}

export default rootReducer