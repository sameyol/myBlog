// registerUserReducer.js
const initialState = {
    loading: false,
    success: false,
    orders: [],
    error: null,
  };
  
  export const registerUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case "USER_REGISTER_REQUEST":
        return {
          ...state,
          loading: true,
          success: false,
          error: null,
        };
      case "USER_REGISTER_SUCCESS":
        return {
          ...state,
          loading: false,
          success: true,
          error: null,
        };
      case "USER_REGISTER_FAILED":
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export const loginUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case "USER_LOGIN_REQUEST":
        return {
          ...state,
          loading: true,
          success: false,
          error: null,
        };
      case "USER_LOGIN_SUCCESS":
        return {
          ...state,
          loading: false,
          success: true,
          currentUser: action.payload,
          error: null,
        };
      case "USER_LOGIN_FAILED":
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export const getUserOrdersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_ORDERS_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_ORDERS_SUCCESS':
        return {
          ...state,
          orders: action.payload,
          loading: false,
          success: true,
          error: null,
        };
      case 'FETCH_ORDERS_FAILURE':
        return {
          ...state,
          orders: [],
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  

  