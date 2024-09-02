import Link from "next/link";

export const metadata = {
  title: "Post Page",
};

export default async function PostPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const posts = await response.json();

  const postsJSX = posts.map((post) => {
    return (
      <Link
        href={`/posts/${post.id}`}
        style={{
          width: "70%",
        }}
      >
        <div
          style={{
            width: "100%",
            background: "white",
            padding: "10px",
            borderRadius: "10px",
            color: "black",
            marginTop: "10px",
          }}
        >
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </Link>
    );
  });

  return (
    <>
      <div
        style={{
          padding: "20px",
          marginTop: "10px",
        }}
      >
        <h2>Post Page</h2>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {postsJSX}
        </div>
      </div>
    </>
  );
}
