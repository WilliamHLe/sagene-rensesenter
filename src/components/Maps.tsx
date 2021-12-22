import React from "react";
import styled from "styled-components";

const Maps = () => {
  return (
    <MapsContainer>
      <Iframe
        className="embed-responsive-item"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJWTfq0RNuQUYRXg61TOCfyYk&amp;key=AIzaSyBh3JXetzCfYzTXIkSYtX7GvGkadt4jtb8"
        allowFullScreen
      />
    </MapsContainer>
  );
};

export default Maps;

const MapsContainer = styled.div`
  width: 100%;
`;
const Iframe = styled.iframe`
  width: 100%;
  height: 500px;
`;
