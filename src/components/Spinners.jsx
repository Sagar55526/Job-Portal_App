import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinners = ({ loading }) => {
  return (
    <>
      <ClipLoader
        color="#43383a"
        loading={loading}
        cssOverRide={override}
        size={150}
      />
    </>
  );
};

export default Spinners;
