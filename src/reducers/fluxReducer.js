import { GET_FLUX } from "../actions/types";

const initialState = {
  flux: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FLUX:
      return {
        ...state,
        flux: action.payload
      };
    default:
      return state;
  }
}
