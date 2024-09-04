import React from "react";
import { useSelector } from "react-redux";
import { Dimmer, Loader } from "semantic-ui-react";

export default function LoaderWrapper() {
  const isLoading = useSelector((state) => state.loaderReducer.isLoading);

  return (
    <Dimmer active={isLoading}>
      <Loader size="massive">Loading</Loader>
    </Dimmer>
  );
}
