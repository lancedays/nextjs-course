import conn from "../../../helpers/db-connector";

export default async function Handler(req, res) {
  switch (req.method) {
    case "GET":
      await handleGet(req, res);
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
    const query = "select * from events where id=$1";
    const result = await conn.query(query, [req.query.eventId]);
    if (result.rowCount == 0) {
      return res.status(404).json({ message: "Event not found." });
    }
    if (result.rowCount == 1) {
      return res.status(200).json({ event: result.rows[0] });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

async function handleDelete(req, res) {
  try {
    const query = "delete from events where id=$1";
    const result = await conn.query(query, [req.query.eventId]);
    if (result.rowCount == 0) {
      return res.status(404).json({ message: "Event not found." });
    }
    if (result.rowCount == 1) {
      return res.status(202).json({ message: "Event deleted." });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
