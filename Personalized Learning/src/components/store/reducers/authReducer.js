const initState = {
  authError: null,
  verifyEmail: {
    error: null,
  },
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        //authError: "Login failed",
        authError: "Incorrect email or password.",
      };

    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null,
      };
    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return {
        ...state,
        authError: null,
      };

    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authError: null,
      };

    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message,
      };

    case "EMAIL_EXIST":
      console.log("signup error, email exist");
      return {
        ...state,
        authError: "Email already exists",
      };

    case "VERIFY_SUCCESS":
      console.log("verify success");
      return {
        ...state,
        verifyEmail:{
          ...state.verifyEmail,
          error: null
        },
      };

      case "VERIFY_ERROR":
      console.log("verify error");
      return {
        ...state,
        verifyEmail:{
          ...state.verifyEmail,
          error: action.err.message
        },
      };

    default:
      return state;
  }
};

export default authReducer;
