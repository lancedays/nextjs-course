import { getEvents } from "./index";

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
    const eventId = req.query.eventId;
    const event = (await getEvents()).filter((e) => e.id === eventId)[0];
    if (!event) {
      return res.status(404).json({ message: "event not found." });
    }
    return res.status(200).json({ event: event });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}

async function handlePost(req, res) {}
async function handleDelete(req, res) {}
