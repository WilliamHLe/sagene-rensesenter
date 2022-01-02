import React from "react";
import styled from "styled-components";
import { BsClockFill, BsFillTelephoneFill } from "react-icons/bs";

const Topbar = () => {
  return (
    <Bar>
      <BarItem>
        <Icon>
          <BsClockFill />
        </Icon>
        09-17 (10-14)
      </BarItem>
      <BarItem>
        <Icon>
          <BsFillTelephoneFill />
        </Icon>
        96 69 22 73
      </BarItem>
    </Bar>
  );
};

export default Topbar;

const Bar = styled.div`
  background: #1c2330;
  height: 35px;
  display: none;
  justify-content: space-around;
  z-index: 100;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  position: relative;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const BarItem = styled.div`
  color: #7e8992;
  display: flex;
  align-items: center;
  font-size: 0.8em;

  &:hover {
    color: white;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.2rem;
`;
