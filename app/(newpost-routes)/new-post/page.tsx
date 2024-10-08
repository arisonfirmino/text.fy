import PageTitle from "@/app/components/page-title";
import Form from "./components/form";

const NewPost = () => {
  return (
    <>
      <div className="px-5 pt-5">
        <PageTitle>Nova publicação</PageTitle>
      </div>

      <div className="px-5 pt-5">
        <Form />
      </div>
    </>
  );
};

export default NewPost;
