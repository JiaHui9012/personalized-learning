const initState = {
  initError: null,
};

const moduleReducer = (state = initState, action) => {
  switch (action.type) {
    case "MODULE ADDED SUCCESSFULLY":
      console.log("The module has been added successfully");
      return {
        ...state,
        initError: null,
      };
    case "MODULE FAILED TO ADD":
      console.log("Adding module failed");
      return {
        ...state,
        initError: "Failed to add the module",
      };
    default:
      return state;
  }
};

export default moduleReducer;
