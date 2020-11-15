import { axiosWithAuth } from "../axiosWithAuth";
import * as constants from "../../constants";

export const fetchClasses = () => (dispatch) => {
  dispatch({ type: constants.FETCH_CLASSES_START });
  axiosWithAuth()
    .get("http://localhost:5000/api/classes")
    .then((res) => {
      console.log("Fetch Classes Successful ==>> ", res);
      dispatch({ type: constants.FETCH_CLASSES_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("Fetch Classes Failed ==>> ", err.message);
      dispatch({ type: constants.FETCH_CLASSES_FAILURE, payload: err.message });
    });
};
