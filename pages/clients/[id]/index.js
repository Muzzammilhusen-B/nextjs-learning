import {useRouter} from "next/router";

function ClientProjectsPage() {
  const router = useRouter();
  console.log("query", router.query);

  function loadProjectHandler() {
    //load data then programaticall navigate
    // router.push("/clients/muzzammil/projectA");   //alternative way as below for programaticaly navigate
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: {id: "muzzammil", clientprojectid: "projectA"},
    });
  }
  return (
    <div>
      <h1>The ClientProjects Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
