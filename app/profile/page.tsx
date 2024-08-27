import PageTitle from "../components/page-title";
import ProfileClient from "./components/profile-client";

export default function Profile() {
  return (
    <>
      <div className="px-5 pt-5">
        <PageTitle>Perfil</PageTitle>
      </div>

      <ProfileClient />
    </>
  );
}
