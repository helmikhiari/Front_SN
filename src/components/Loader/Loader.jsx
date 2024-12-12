import React from "react";
import { SyncLoader } from "react-spinners";

export const Loader = () => {
  const loading = false;
  const override = {
    position: "absolute",
    top: "50vh",
    left: "50vw",
  };
  return <SyncLoader cssOverride={override} loading={loading} color="black" />;
};
