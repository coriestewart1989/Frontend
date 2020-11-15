import { axiosWithAuth } from "../axiosWithAuth";
import * as constants from "../../constants";

export const fetchUser = (id) => (dispatch) => {
  dispatch({ type: constants.FETCH_USER_START });
  axiosWithAuth()
    .get(`http://localhost:5000/api/users/${id}`)
    .then((res) => {
      console.log("Fetch User Successful ==>> ", res);
      dispatch({ type: constants.FETCH_USER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("Fetch User Failed ==>> ", err.message);
      dispatch({ type: constants.FETCH_USER_FAILURE, payload: err.message });
    });
};
