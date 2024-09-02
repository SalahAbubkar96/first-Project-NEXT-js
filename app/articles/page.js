import React from "react";
import Link from "next/link";


 export const metadata = {
  title:"articles Page"
}

const page = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100vh",
      }}
    >
      <h2>page articles</h2>
      <Link href="/Post">
        <button
          style={{ background: "red", margin: "25px", cursor: "pointer" }}
        >
          Take me to the Post
        </button>
      </Link>
    </div>
  );
};

export default page;
