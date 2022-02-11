import Api from "./axios";
// 429 >> that means token is expired so you must log in again
// import router from "../router";
// import store from "../store";
// Start Get Helper Mthods
export function getMethods(uri) {
  return new Promise((resolve, reject) => {
    Api.get(`${uri}`, {
      headers: {
        language: localStorage.getItem("lang"),
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        if (error.response) {
          error.response.status == 400
            ? console.log(error.response.data.message)
            : "no";
          error.response.status == 401
            ? console.log(error.response.data.message)
            : "no";
          error.response.status == 404
            ? console.log(error.response.data.message)
            : "no";
          error.response.status == 500
            ? console.log(error.response.data.message)
            : "no";
        }
        reject(error);
      });
  });
}
// End Get Helper Mthods

// Start Post Methods
export function postMethods(uri, payload) {
  return new Promise((resolve, reject) => {
    Api.post(`${uri}`, payload, {
      headers: {
        language: localStorage.getItem("lang"),
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        if (error.response) {
          error.response.status == 400
            ? console.log(error.response.data.message)
            : "no";
          error.response.status == 401
            ? console.log(error.response.data.message)
            : "no";
          error.response.status == 404
            ? console.log(error.response.data.message)
            : "no";
          error.response.status == 500
            ? console.log(error.response.data.message)
            : "no";
        }
        reject(error);
      });
  });
}
// Start Post Methods

export function deleteMethods(uri, id) {
  return new Promise((resolve, reject) => {
    Api.delete(`${uri}`, {
      params: id,
      headers: {
        language: localStorage.getItem("lang"),
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        if (error.response) {
          error.response.status == 400
            ? console.log(error.response.data.message)
            : "no";
          error.response.status == 401
            ? console.log(error.response.data.message)
            : "no";
          error.response.status == 404
            ? console.log(error.response.data.message)
            : "no";
          error.response.status == 500
            ? console.log(error.response.data.message)
            : "no";
        }
        reject(error);
      });
  });
}

export function append_Object_Items_ToFormData(object) {
  const formData = new FormData();
  Object.keys(object).forEach((key) => formData.append(key, object[key]));
  return formData;
}
