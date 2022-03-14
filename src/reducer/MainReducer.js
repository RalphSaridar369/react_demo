import { clear, setItem } from "../helpers/storage";
// reducer function

const mainReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      setItem("user", action.payload.UserData);
      return { ...state, UserData: action.payload.UserData, LoggedIn: true }
    case 'SIGN_OUT':
      clear();
      return { ...state, UserData: null, LoggedIn: false }
  }
};

export default mainReducer