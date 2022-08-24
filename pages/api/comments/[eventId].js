export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      await handleGet(req, res);
      break;
    case "POST":
      await handlePost(req, res);
      break;
    default:
      return res
        .status(405)
        .json({ message: `Method ${req.method} not allowed.` });
  }
}

async function handlePost(req, res) {
  return res
    .status(200)
    .json({ message: "POST for event: " + req.query.eventId });
}

async function handleGet(req, res) {
  return res
    .status(200)
    .json({ message: "GET for event: " + req.query.eventId });
}
