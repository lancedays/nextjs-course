export default async function handler(req, res) {
  switch (req.method) {
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
  // Basic email validation
  const userEmail = req.body.email;
  if (!userEmail || !userEmail.includes("@")) {
    return res.status(400).json({ message: "Bad request, email not valid." });
  }

  console.log(userEmail);
  return res.status(200).json({ message: req.body.email });
}
