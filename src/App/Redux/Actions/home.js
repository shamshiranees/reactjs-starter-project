import apiAction from "./index";
import { SET_GET_DATA, FETCH_GET_DATA, DATA_FETCH_ERROR } from "./types";

export function makeGETrequest() {
  return apiAction({
    url: `/todos`,
    method: "GET",
    onSuccess: getRequestSuccess,
    onFailure: setOnError,
    label: FETCH_GET_DATA,
  });
}

export function makePOSTrequest(data) {
  return apiAction({
    url: `/posts`,
    method: "POST",
    data: data,
    onSuccess: getRequestSuccess,
    onFailure: setOnError,
    label: FETCH_GET_DATA,
  });
}

export function getRequestSuccess(data) {
  return {
    type: SET_GET_DATA,
    payload: data,
  };
}

function setOnError() {
  return {
    type: DATA_FETCH_ERROR,
    payload: "error",
  };
}
