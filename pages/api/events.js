const https = require("https");

export default async function Handler(request, response) {
  switch (request.method) {
    case "GET":
      handleGet(request, response);
      break;
    case "POST":
      handlePost(request, response);
      break;
    case "DELETE":
      handleDelete(request, response);
      break;
    default:
      return response.status(400).json({ message: "Bad Request" });
  }
}

async function handleGet(request, response) {
  return response.status(200).json({ message: "Event Get" });
}

async function handlePost(request, response) {
  return response.status(200).json({ message: "Event Post" });
}

async function handleDelete(request, response) {
  return response.status(200).json({ message: "Event Delete" });
}
