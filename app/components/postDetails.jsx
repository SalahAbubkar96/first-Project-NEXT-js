export default async function PostDetalis({ postId }) {
  
    await new Promise((resolve)=>{
      setTimeout(()=>{
        resolve()
      },2000)
    })
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        next: {
          revalidate: 120,
        },
      }
    );
    const post = await response.json();
    return (
      <div
  
      >
      
        <div
          style={{
            width: "80%",
            background: "white",
            padding: "10px",
            borderRadius: "10px",
            color: "black",
          }}
        >
          <h2>{post.title}</h2>
          <hr />
          <p style={{ marginTop: "20px" }}>{post.body}</p>
        </div>
      </div>
    );
  }
  