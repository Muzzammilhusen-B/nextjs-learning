import Link from "next/link";

function ClientsPage() {
  const clients = [
    {id: "muzzammil", name: "Muzzammil"},
    {id: "bhatti", name: "Bhatti"},
  ];
  return (
    <div>
      <h1>The ClientsPage Page</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link
                // href={`/clients/${client.id}`} //another way for longer url
                href={{
                  pathname: "/clients/[id]",
                  query: {id: client.id},
                }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ClientsPage;
