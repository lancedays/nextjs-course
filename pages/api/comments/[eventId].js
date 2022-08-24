const dummyComments = [
  { id: "c1", name: "Lance", text: "First comment!" },
  { id: "c2", name: "Days", text: "Second comment :(" },
];

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
  const { email, name, text } = req.body;
  const { isValid, reason } = validateComment(email, name, text);
  if (!isValid) {
    return res.status(422).json({ message: reason });
  }

  const newComment = {
    id: new Date().toISOString(),
    email,
    name,
    text,
  };

  return res
    .status(201)
    .json({ message: "Added comment.", comment: newComment });
}

async function handleGet(req, res) {
  return res.status(200).json({ comments: dummyComments });
}

function validateComment(email, name, text) {
  let reason = "";
  let isValid = true;
  if (!email || !email.includes("@")) {
    reason += "invalid email property, ";
    isValid = false;
  }
  if (!name || name.trim() === "") {
    reason += "invalid name property, ";
    isValid = false;
  }
  if (!text || text.trim() === "") {
    reason += "invalid text property, ";
    isValid = false;
  }
  reason = reason.trim();
  if (reason.endsWith(",")) {
    reason = reason.slice(0, -1);
  }

  return { isValid, reason };
}
