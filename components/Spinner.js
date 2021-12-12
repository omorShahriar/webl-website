import styled from "styled-components";

const SVG = styled.svg`
  @keyframes spinning-circle {
    0% {
      stroke-dashoffset: 0;
      stroke-dasharray: 150.6 100.4;
    }
    50% {
      stroke-dasharray: 1 250;
    }
    100% {
      stroke-dashoffset: 502;
      stroke-dasharray: 150.6 100.4;
    }
  }
  & .spinner__circle {
    animation: 1s linear spinning-circle reverse infinite;
  }
`;

const Spinner = () => {
  return (
    <SVG
      className="spinner"
      width={48}
      height={48}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <path className="spinner__rect" fill="none" d="M0 0h100v100H0z" />
      <circle
        className="spinner__circle"
        cx={50}
        cy={50}
        r={40}
        stroke="#3CBB95"
        fill="none"
        strokeWidth={8}
        strokeLinecap="round"
      />
    </SVG>
  );
};

export default Spinner;
