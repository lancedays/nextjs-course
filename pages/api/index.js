export default function handler(req, res) {
  const message = "This is the root of the API";
  return res.status(200).json({ message: message });
}
