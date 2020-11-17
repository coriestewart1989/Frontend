import axios from "axios";

export const login = (user) => {
  console.log(user);
  return axios
    .post("http://localhost:5000/api/login", user)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
