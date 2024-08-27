import PageTitle from "../components/page-title";
import PostClient from "./components/post-client";

export default async function Post() {
  return (
    <>
      <div className="px-5 pt-5">
        <PageTitle>Nova publicação</PageTitle>
      </div>

      <PostClient />
    </>
  );
}
