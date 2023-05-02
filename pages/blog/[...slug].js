import {useRouter} from "next/router";

function BlogPostPage() {
  const router = useRouter();

  console.log("query=>", router.query);
  return (
    <div>
      <h1>The Blog post </h1>
    </div>
  );
}

export default BlogPostPage;
