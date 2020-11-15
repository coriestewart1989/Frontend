import { axiosWithAuth } from "./axiosWithAuth";

export const fetchUesrInfo = (id) => {
  axiosWithAuth()
    .get(`http://localhost:5000/api/users/${id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
