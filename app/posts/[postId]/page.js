import PostDetalis from "@/app/components/postDetails";
import { Suspense } from "react";

export default async function PostDetalisPage({ params }) {
  const postId = params.postId;
const lodingJsx = (<div>Loding..</div>)
  return (
    <div
      style={{
        padding: "25px",
        height: "100vh",
        background: "teal",
        display: "flex",
        alignItems: "center",

        flexDirection: "column",
      }}
    >
      <h1 style={{ paddingLeft: "10px", marginBottom: "10px" }}>
        posts Detalis
      </h1>
      <Suspense fallback={lodingJsx}>
        <PostDetalis postId={postId} />
      </Suspense>
    </div>
  );
}
