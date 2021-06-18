import axios from "axios";
const { REACT_APP_LOGIN, REACT_APP_REGISTER, REACT_APP_GET } = process.env;


export const removeThing = (category, id) => ({
  type: "REMOVE_THING",
  payload: {
    category,
    id,
  },
});

export const logout = () => {
  return {
    type: 'LOGOUT_REQ',
  }
}

export const addThing = (category, thingContent) => {
  return {
    type: "ADD_THING",
    payload: {
      category,
      thing: {
        ...thingContent,
      },
    },
  };
};

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
      dispatch({ type: "GET_ERR", err });
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
      console.log(err, "oh maaan");
      dispatch({ type: "REGISTER_ERR", err });
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
      console.log(err, "oh maaan");
      dispatch({ type: "AUTHENTICATE_ERR", err });
    });
};
