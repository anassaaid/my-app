import { GET_FLUX } from "./types";
import axios from "axios";

export const getFlux = () => async dispatch => {
  const res = await axios.get("http://localhost:4000/flux");
  dispatch({
    type: GET_FLUX,
    payload: res.data
  });
};

export const getOneFlux = (id) => async dispatch => {
  const res = await axios.get("http://localhost:4000/flux");
  dispatch({
    type: GET_FLUX,
    payload: res.data
  });
};
