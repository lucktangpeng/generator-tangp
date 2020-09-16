const { request } = require("../request");

export const requestGet = (params) => {
  request.request({
    method: "get",
    url: "/user",
    params,
  });
};
