const initialState = {
    music: [
     
    ],
    film: [
      
    ],
    ideas: [
       
    ],
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
   case 'REMOVE_THING':
     return {
         ...state,
         [action.payload.category]: [
             ...state[action.payload.category].filter(item => item.id 
             !== action.payload.id),
         ],
     };
   case 'ADD_THING':
       console.log(
        state
       )
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