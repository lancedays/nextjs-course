import conn from "../../../helpers/db-connector";

export default async function Handler(req, res) {
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

async function handleGet(req, res) {
  try {
    const query = "select * from events";
    const result = await conn.query(query);
    return res.status(200).json({ events: result.rows });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

async function handlePost(req, res) {
  try {
    const { title, date, description, image, isFeatured, location } = req.body;
    const query =
      "insert into events(id, title, date, description, image, isfeatured, location) VALUES($1,$2,$3,$4,$5,$6,$7)";
    const values = [
      new Date().valueOf(),
      title,
      date,
      description,
      image,
      isFeatured,
      location,
    ];
    const result = await conn.query(query, values);
    return res.status(201).json({ events: result });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
