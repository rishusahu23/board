import styled from "styled-components";

export const BtnCon = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
  padding: 16px 24px;
`;

export const MoveBtn = styled.div`
  position: absolute;
  left: 80px;
  ${(props) => (props.minW ? `left: ${props.minW};` : null)}
  top:20px;
`;

export const StyledImg = styled.div`
  margin: 40px 0px 0px 10px;
  position: relative;
  left: ${(props) => (props.left ? props.left : "50px")};
  top: ${(props) => (props.top ? props.top : "50px")};
`;

export const RotateDiv = styled.div`
  width: 50px;
  height: 50px;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
  -webkit-transform: ${(props) =>
    props.rotate ? `rotate(${props.rotate}deg)` : "rotate(0deg)"};
`;

export const HelloDiv = styled.div`
  margin: -148px 50px;
`;

export const BorderDiv = styled.div``;
