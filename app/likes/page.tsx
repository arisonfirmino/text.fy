import PageTitle from "../components/page-title";
import LikesClient from "./components/likes-client";

export default function Likes() {
  return (
    <>
      <div className="px-5 pt-5">
        <PageTitle>Publicações curtidas</PageTitle>
      </div>

      <LikesClient />
    </>
  );
}
