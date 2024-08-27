import PageTitle from "../../app/components/page-title";
import ExploreClient from "./components/explore-client";

export default function Explore() {
  return (
    <>
      <div className="px-5 pt-5">
        <PageTitle>Explorar</PageTitle>
      </div>

      <ExploreClient />
    </>
  );
}
