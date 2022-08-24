import { Pool } from "pg";

let conn;
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.log("DATABASE_URL env var not set");
}
if (!conn) {
  conn = new Pool({ connectionString, ssl: { rejectUnauthorized: false } });
}

export default conn;
