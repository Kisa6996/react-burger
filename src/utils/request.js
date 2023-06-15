import { checkResponse } from "./check-response";
export async function request(url, method, body = null, token = null) {
  let options;
  switch (method) {
    case "GET":
      options = {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: token,
        },
      };
      break;
    case "POST":
      options = {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };
      break;
    case "PATCH":
      options = {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: token,
        },
      };
      break;
    default:
      break;
  }
  const res = await fetch(url, options);
    return checkResponse(res);
}
