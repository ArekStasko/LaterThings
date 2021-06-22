import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const initialState = {}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userID']
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
   case 'ADD_SUCC' :
     return{
      ...state,
      loading: false,
      flash: {
        type: 'SUCCESS',
        message: 'You added new thing !'
       },
      [action.payload.category]: 
      [...state[action.payload.category],
       action.payload.data
     ],
     }
   case 'LOGOUT_REQ':
     return{
      ...state,
      flash: {
        type: 'SUCCESS',
        message: 'Hope to see you again !'
       },
      userID: null
     }
   case 'AUTHENTICATE_REQ':
     return{
      ...state,
      loading: true,
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
       loading: false,
       flash: {
        type: 'SUCCESS',
        message: 'Welcome to my application !'
       },
       userID: action.payload.data._id
     }
   case 'AUTHENTICATE_SUCC':
     return{
       ...state,
       loading: false,
       flash: {
        type: 'SUCCESS',
        message: 'Nice to see you again !'
       },
       userID: action.payload.data._id
     } 
   case 'ERR':
     return{
       ...state,
       loading: false,
       flash: {
          type: 'ERROR',
          message: null,
         },
     }   
   case 'REMOVE_SUCC':
     return {
         ...state,
         loading: false,
         flash: {
          type: 'SUCCESS',
          message: 'Successfully deleted thing'
         },
         [action.payload.category]:[
         ...state[action.payload.category].filter(item => item._id 
         !== action.payload.id),
         ]
     };
   case "FLASH_RESET":
     return{
       ...state,
       flash: null
     }
     default:
         return state;
  }; 
}

export default persistReducer(persistConfig, rootReducer);