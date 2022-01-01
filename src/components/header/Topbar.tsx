import React from "react";
import styled from "styled-components";
import { FiClock, FiPhone } from "react-icons/fi";

const Topbar = () => {
  return (
    <Bar>
      <BarItem>
        <Clock />
        09-17 (10-14)
      </BarItem>
      <BarItem>
        <Phone />
        96 69 22 73
      </BarItem>
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

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const BarItem = styled.div`
  color: #7e8992;
  display: flex;
  align-items: center;
  font-size: 0.8em;
  padding: 0.2rem 0.5rem;

  &:hover {
    color: white;
  }
`;

const Clock = styled(FiClock)`
  margin-right: 4px;
`;

const Phone = styled(FiPhone)`
  margin-right: 4px;
`;
