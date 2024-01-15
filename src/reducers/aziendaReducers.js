const aziendaReducer = (state = { azienda: [] }, action) => {
  switch (action.type) {
    case "SET_AZIENDA":
      return { azienda: action.payload };
    case "CLEAR_AZIENDA":
      return { azienda: null };
    default:
      return state;
  }
};

export default aziendaReducer;
