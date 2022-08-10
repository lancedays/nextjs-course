import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const router = useRouter();
  var clientName = router.query.id;
  console.log(clientName);

  function loadProjectHandler() {
    // Load data...
    router.push(`/clients/${clientName}/projecta`);
  }

  return (
    <div>
      <h1>This is the clients project list page</h1>
      <div>The client that you selected is {clientName}</div>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
