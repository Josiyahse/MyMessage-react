import axios from "axios";

const getUserJwt = (connexionInfo: any) => {
  // Request API.
  return axios
    .post("http://localhost:1337/api/auth/local", {
      identifier: connexionInfo.email,
      password: connexionInfo.password,
    })
    .then((response) => {
      // Handle success.
      return response.data.jwt;
    })
    .catch((error) => {
      // Handle error.
      console.log("An error occurred:", error.response);
    });
};

export { getUserJwt };
