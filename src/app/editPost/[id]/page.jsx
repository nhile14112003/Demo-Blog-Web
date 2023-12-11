import "react-quill/dist/quill.bubble.css";
import EditPostId from "@/components/editPostId/EditPostId";

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const editPostPage = async ({ params }) => {
  const { id } = params
  const data = await getData(id);
  return (
    <div>
      <EditPostId data={data} />
    </div>
  );
};

export default editPostPage;

