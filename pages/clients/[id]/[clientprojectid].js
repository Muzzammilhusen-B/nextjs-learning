import {useRouter} from "next/router";

function SelectedProjectPage() {
  const router = useRouter();
  console.log("patname=>", router.pathname);
  console.log("query=>", router.query);
  return (
    <div>
      <h1>The project page for specific project id selected client</h1>
    </div>
  );
}

export default SelectedProjectPage;
