import React from "react";
export const metadata = {
  title: "articles Page",
};



const layout = ({ children }) => {
  return (
    <>
      <h2 style={{ margin: "25px" }}>layout</h2>

      <div
        style={{
          marginTop: "50px",
          background: "teal",
          borderRadius: "10px",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default layout;
