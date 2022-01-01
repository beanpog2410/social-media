const initialState = {
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "TYPE":
      state = payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
