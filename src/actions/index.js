import axios from "axios";
const { REACT_APP_LOGIN, REACT_APP_REGISTER, REACT_APP_GET, REACT_APP_CREATE, REACT_APP_DELETE } = process.env;


export const logout = () => {
  return {
    type: 'LOGOUT_REQ',
  }
}

export const addCategory = category => {
  return {
    type: "ADD_CATEGORY",
    payload: {
      category
    },
  };
};

export const getItems = (category) => (dispatch, getState) =>{
  dispatch({ type: "GET_ITEMS" });
  return axios
    .get(REACT_APP_GET + category, {
      params: {
        userID: getState().userID
      }
    })
    .then(({ data }) => {
      dispatch({ 
      type: "GET_SUCC", 
      payload: {
        data,
        category
      }
    });
    })
    .catch((err) => {
      console.log(err, "oh maaan");
      dispatch({ type: "ERR", err });
    });
}

export const register = (username, password) => (dispatch) => {
  dispatch({ type: "REGISTER_REQ" });
  return axios
    .post(REACT_APP_REGISTER, {
      username,
      password,
    })
    .then((payload) => {
      dispatch({ type: "REGISTER_SUCC", payload });
    })
    .catch((err) => {
      dispatch({ type: "ERR", err });
    });
};

export const authenticate = (username, password) => (dispatch) => {
  dispatch({ type: "AUTHENTICATE_REQ" });
  return axios
    .post(REACT_APP_LOGIN, {
      username,
      password,
    })
    .then((payload) => {
      dispatch({ type: "AUTHENTICATE_SUCC", payload });
    })
    .catch((err) => {
      dispatch({ type: "ERR", err });
    });
};


export const addThing = (category, thingContent) => (dispatch, getState) => {
  dispatch({ type: "ADD_REQ" })
  return axios
   .post(REACT_APP_CREATE,{
      params:{
        userID: getState().userID
      },
      thingContent
   })
   .then(({ data }) => {
     dispatch({ 
       type: 'ADD_SUCC',
       payload: {
        data,
        category
      }
      })
   })
   .catch((err) => {
     dispatch({ type: 'ERR', err })
   })
};

export const removeThing = (category, id) => (dispatch) => {
  dispatch({ type: "REMOVE_REQ" })
  return axios
   .delete(REACT_APP_DELETE + id)
   .then(() => {
     dispatch({ 
       type: 'REMOVE_SUCC',
       payload: {
         category,
         id
       }
      })
   })
   .catch((err) => {
     console.log(err, 'hmm error')
     dispatch({ type: 'ERR', err })
   })
};

export const resetFlash = () => {
  return {
    type: "FLASH_RESET"
  };
};