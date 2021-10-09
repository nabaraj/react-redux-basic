// import * as types from "../actions/types";

// const initialState = {
//   smileyImages: []
// };

const sampleReducer = (state = { data: ['name'] }, action) => {
  switch (action.type) {
    case "SAMPLE_TEST":
      return { data: [action.payload, ...state.recentImages] };
    default:
      return state;
  }
};

export default sampleReducer;
