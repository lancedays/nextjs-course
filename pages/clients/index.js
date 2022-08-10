import Link from "next/link";

export default function ClientsPage() {
  const clientList = [
    { id: "lancedays", name: "Lance Days" },
    { id: "daniel", name: "Daniel" },
    { id: "max1233", name: "Max" },
  ];

  return (
    <div>
      <h1>This is the clients page</h1>
      <ul>
        {clientList.map((client) => {
          return (
            <li key={client.id}>
              <Link href={`/clients/${client.id}`}>{client.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
