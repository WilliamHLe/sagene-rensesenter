import React from "react";
import styled from "styled-components";

const Topbar = () => {
  return (
    <Bar>
      <BarItem>09-17 (10-14)</BarItem>
      <BarItem>96 69 22 73</BarItem>
    </Bar>
  );
};

export default Topbar;

const Bar = styled.div`
  background: #1c2330;
  height: 35px;
  display: flex;
  justify-content: space-around;
  z-index: 100;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  position: relative;
`;

const BarItem = styled.div`
  color: #7e8992;
  display: flex;
  align-items: center;
  font-size: 0.8em;
`;
