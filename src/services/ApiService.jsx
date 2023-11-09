import axios from "axios";

const ApiService = async (url_end_point, type, data, isToken) => {
  let token = null;
  if (isToken) {
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user"))?.token;
      console.log("Token");
      console.log(token);
    } else {
      console.log("Token not found");
    }
  }
  const apiObj = (url_end_point, type, data) => {
    const baseUrl = "https://digital.whitecrappie.in/api";
    const obj = {
      url: `${baseUrl}/${url_end_point}`,
      method: type,
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
        "Access-Control-Allow-Origin": "*",
      },
      data: data,
    };
    return obj;
  };
  try {
    const response = await axios(apiObj(url_end_point, type, data));
    return response;
  } catch (err) {
    console.log(`${err}`);
    return err;
  }
};

export default ApiService;
