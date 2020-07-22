export default (state, action) => {
  switch (action.type) {
    case "GET_CANDIDATES":
      return {
        ...state,
        loading: false,
        candidates: action.payload,
      };
    case "UPDATE_CANDIDATE":
      return {
        ...state,
        loading: false,
        candidates: state.candidates.map((candidate) =>
          candidate._id === action.payload.id
            ? { ...candidate, firstName: action.payload.firstName }
            : candidate
        ),
      };
    // return {
    //     ...state,
    //     loading: false,
    //     candidates: state.candidates
    // }
    default:
      return state;
  }
};
