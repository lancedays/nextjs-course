const request = require("../../../helpers/await-request");
const fireBaseURL = process.env.FIREBASE_URL;

export default async function Handler(req, res) {
  switch (req.method) {
    case "GET":
      await handleGet(req, res);
      break;
    case "POST":
      await handlePost(req, res);
      break;
    case "DELETE":
      await handleDelete(req, res);
      break;
    default:
      return res
        .status(405)
        .json({ message: `Method ${req.method} not allowed.` });
  }
}

async function handleGet(req, res) {
  try {
    const events = await getEvents();
    return res.status(200).json(events);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

async function handlePost(request, response) {
  return response.status(200).json({ message: "Event Post" });
}

async function handleDelete(request, response) {
  return response.status(200).json({ message: "Event Delete" });
}

export async function getEvents() {
  const result = await request({
    baseUrl: fireBaseURL,
    uri: "/events.json",
    json: true,
  });
  const events = [];
  for (const key in result) {
    events.push({
      id: key,
      ...result[key],
    });
  }
  return events;
}
