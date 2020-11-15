import { axiosWithAuth } from "./axiosWithAuth";

export const fetchClasses = () => {
  axiosWithAuth()
    .get("http://localhost:5000/api/classes")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
