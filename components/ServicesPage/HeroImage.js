import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
  background: #fff;
  border-radius: 25px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-bottom: 1rem;
  ${media.sm`
    width:70%;
  `}
  ${media.md`
    width:100%;
  `}
`;
const HeroImage = (props) => (
  <Container>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1563.6 974.3"
      {...props}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1={870.9}
          y1={674}
          x2={947.5}
          y2={674}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#09005d" />
          <stop offset={1} stopColor="#1a0f91" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1={12426.3}
          y1={989.2}
          x2={12452.2}
          y2={826.1}
          gradientTransform="translate(-11287 -53)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#4042e2" />
          <stop offset={1} stopColor="#4f52ff" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-3"
          x1={12436.7}
          y1={990.9}
          x2={12462.6}
          y2={827.8}
          gradientTransform="translate(-11109)"
          xlinkHref="#linear-gradient-2"
        />
        <linearGradient
          id="linear-gradient-4"
          x1={1151}
          y1={821.8}
          x2={1151.5}
          y2={737.9}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fe7062" />
          <stop offset={1} stopColor="#ff928e" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-5"
          x1={-494.3}
          y1={963.9}
          x2={-473.2}
          y2={963.9}
          gradientTransform="matrix(-1 0 0 1 777 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ff928e" />
          <stop offset={1} stopColor="#feb3b1" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-6"
          x1={-523.5}
          y1={908.1}
          x2={-433.8}
          y2={782.5}
          gradientTransform="matrix(-1 0 0 1 777 0)"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-7"
          x1={-503}
          y1={1010.2}
          x2={-446.3}
          y2={1010.2}
          gradientTransform="matrix(-1 0 0 1 777 0)"
          xlinkHref="#linear-gradient-4"
        />
        <linearGradient
          id="linear-gradient-8"
          x1={-509.5}
          y1={983.4}
          x2={-489.7}
          y2={983.4}
          xlinkHref="#linear-gradient-5"
        />
        <linearGradient
          id="linear-gradient-9"
          x1={-555.8}
          y1={970.7}
          x2={-550.8}
          y2={802.7}
          gradientTransform="matrix(-1 0 0 1 777 0)"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-10"
          x1={-449.1}
          y1={755.1}
          x2={-380}
          y2={755.1}
          xlinkHref="#linear-gradient-5"
        />
        <linearGradient
          id="linear-gradient-11"
          x1={1264.4}
          y1={649.6}
          x2={1286.8}
          y2={669.3}
          xlinkHref="#linear-gradient-5"
        />
        <linearGradient
          id="linear-gradient-12"
          x1={1394.9}
          y1={681.1}
          x2={1331.3}
          y2={778.6}
          xlinkHref="#linear-gradient-5"
        />
        <linearGradient
          id="linear-gradient-13"
          x1={1287.5}
          y1={620.2}
          x2={1242.7}
          y2={625.1}
          xlinkHref="#linear-gradient-5"
        />
        <linearGradient
          id="linear-gradient-14"
          x1={-186.4}
          y1={-1025.7}
          x2={-118}
          y2={-1025.7}
          gradientTransform="scale(-1 1) rotate(-14 5698 4115)"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-15"
          x1={1287.9}
          y1={623.5}
          x2={1243.1}
          y2={628.3}
          xlinkHref="#linear-gradient-5"
        />
        <style>
          {
            ".cls-3{fill:#0e2e35}.cls-4{fill:#d3e8e8}.cls-30,.cls-5{fill:#fff}.cls-7{fill:#8fc6c6}.cls-19,.cls-8{fill:none;stroke-miterlimit:10}.cls-8{stroke:#206bc7;stroke-width:1.13px}.cls-10{fill:#ffb701}.cls-11{fill:#206bc7;mix-blend-mode:multiply}.cls-17{fill:#e1e8f0}.cls-13{fill:#ffe25e}.cls-19{stroke:#ffb701;stroke-linecap:round;stroke-width:1.26px}.cls-53{fill:#006661}.cls-22{fill:#ff5d03}.cls-23{fill:#f7a491}.cls-28{fill:#f47458}.cls-30{mix-blend-mode:soft-light}.cls-31{fill:#184655}.cls-34{fill:#ff7900}.cls-36{fill:#f7cc7f}.cls-40{fill:#13375b}.cls-51{fill:#3cbb95}.cls-59{fill:#7d97f4}"
          }
        </style>
      </defs>
      <g
        style={{
          isolation: "isolate",
        }}
      >
        <g id="Layer_1" data-name="Layer 1">
          <path
            className="cls-3"
            d="M0 959h1564v15H0z"
            style={{
              opacity: 0.5,
            }}
          />
          <path
            className="cls-4"
            d="M501 802c0-34-6-68-21-99s-38-58-68-75c-22-13-52-18-71-2-7 5-11 12-14 20a81 81 0 0 0-1 61c7 17 19 31 32 44 35 34 81 60 130 60M495 871c-21-24-52-39-83-43-12-1-37-5-43 7-7 11 9 28 17 35 9 7 19 14 30 18 26 10 58 4 79-15M1320 808c-17-48-24-102-8-151s57-92 109-103c7-1 15-2 22 0s13 6 18 11c26 24 32 61 25 95s-28 62-50 88c-25 28-57 55-95 59M1345 864c7-11 19-18 31-25 24-12 50-23 77-27 14-2 32 0 40 12 6 11 2 24-5 34a75 75 0 0 1-50 30c-12 2-25 1-38-1-18-2-36-5-51-14"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-5"
            d="m1410 614-31 37q-15 18-29 38l-28 39-27 39-25 40-3 5c-1 1 0 2 1 1l25-40 27-39q13-20 28-39t29-38q14-19 30-37l4-5-1-1ZM1451 853l-56 8q-28 3-57 4h-32a1 1 0 0 0 0 1q29 1 57-1 29-1 57-6l32-5s0-2-1-1ZM370 679l43 27 42 30 40 32q19 16 37 34t35 37l4 4c1 1 2 0 1-1l-35-37q-18-18-37-34l-39-33q-20-16-42-29-21-15-43-28l-5-3a1 1 0 0 0-1 1ZM405 855a509 509 0 0 0 115 23l34 2a1 1 0 0 0 0-1 509 509 0 0 1-117-16l-32-9v1Z"
            transform="translate(-178 -53)"
          />
          <path
            d="m504 942 857-2-96-548c-4-21-23-37-45-37l-765 2c-28 0-50 24-45 51Z"
            transform="translate(-178 -53)"
            style={{
              fill: "#b8e8ce",
            }}
          />
          <path
            className="cls-7"
            d="M566 543c-11-8-25-8-31 0s-3 22 8 30 25 8 31 0 3-22-8-30Z"
            transform="translate(-178 -53)"
          />
          <path className="cls-8" d="M425 506h467" />
          <ellipse
            className="cls-7"
            cx={595.5}
            cy={736.2}
            rx={18.7}
            ry={24.6}
            transform="rotate(-53 453 888)"
          />
          <path className="cls-8" d="M466 684h466" />
          <path
            d="m411 413-1-5c-5-27 17-51 45-51l765-2c22 0 41 16 45 37l4 22c2-3-858-1-858-1Z"
            transform="translate(-178 -53)"
            style={{
              fill: "#79d3a0",
            }}
          />
          <path
            className="cls-5"
            d="M481 381c-5-4-12-4-16 0s-1 11 5 16 13 4 16 0 1-12-5-16Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-10"
            d="M519 381c-6-4-13-4-16 0s-2 11 4 16 13 4 16 0 1-12-4-16Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-7"
            d="M556 381c-6-4-13-4-16 0s-1 11 4 16 13 4 16 0 2-12-4-16ZM1100 318l20-19h74c15 0 28-12 28-27v-5c0-15-13-27-28-27h-66c-16 0-28 12-28 27Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-5"
            d="M1182 269a7 7 0 1 0 7-7 7 7 0 0 0-7 7ZM1157 269a7 7 0 1 0 7-7 7 7 0 0 0-7 7ZM1132 269a7 7 0 1 0 7-7 7 7 0 0 0-7 7Z"
            transform="translate(-178 -53)"
          />
          <ellipse
            className="cls-11"
            cx={1053.1}
            cy={128.3}
            rx={14.2}
            ry={13.6}
          />
          <ellipse
            className="cls-11"
            cx={146.8}
            cy={466.3}
            rx={14.2}
            ry={13.6}
          />
          <path
            className="cls-10"
            d="m1084 237-20-19h-74c-16 0-28-12-28-27v-5c0-15 12-27 28-27h66c15 0 28 12 28 27Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-5"
            d="M1002 188a7 7 0 1 1-7-7 7 7 0 0 1 7 7ZM1027 188a7 7 0 1 1-7-7 7 7 0 0 1 7 7ZM1052 188a7 7 0 1 1-7-7 7 7 0 0 1 7 7Z"
            transform="translate(-178 -53)"
          />
          <path
            d="m1226 500 64-54h244c50 0 90-34 90-76v-17c0-42-40-76-90-76h-218c-50 0-90 34-90 76Z"
            transform="translate(-178 -53)"
            style={{
              opacity: 0.51,
              fill: "#e1e8f0",
            }}
          />
          <path className="cls-10" d="M1111 269h100v71h-100z" />
          <path
            className="cls-13"
            d="m1289 321 43 41a10 10 0 0 0 14 0l44-42Z"
            transform="translate(-178 -53)"
          />
          <path
            d="M1381 378h-26a1 1 0 0 1-1-1 1 1 0 0 1 1-1h26a1 1 0 0 1 1 1 1 1 0 0 1-1 1Z"
            transform="translate(-178 -53)"
            style={{
              opacity: 0.73,
              fill: "#fff",
            }}
          />
          <path
            className="cls-5"
            d="M1323 371h-25a1 1 0 0 1-2-1 1 1 0 0 1 2-1h25a1 1 0 0 1 1 1 1 1 0 0 1-1 1ZM1323 378h-25a1 1 0 0 1-2-2 1 1 0 0 1 2-1h25a1 1 0 0 1 1 1 1 1 0 0 1-1 2ZM1567 345h-151a7 7 0 0 1-8-7 7 7 0 0 1 8-7h151a7 7 0 0 1 8 7 7 7 0 0 1-8 7ZM1496 369h-84a4 4 0 0 1-4-4 4 4 0 0 1 4-4h84a4 4 0 0 1 4 4 4 4 0 0 1-4 4ZM1496 386h-84a4 4 0 0 1-4-4 4 4 0 0 1 4-4h84a4 4 0 0 1 4 4 4 4 0 0 1-4 4Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-10"
            d="M1019 278c0-21-18-38-40-38s-39 17-39 38 37 54 37 54 42-33 42-54Z"
            transform="translate(-178 -53)"
          />
          <path
            d="M953 250a32 32 0 0 0-3 13c0 16 12 34 29 37s35-8 40-23c-1-21-18-37-40-37a40 40 0 0 0-26 10Z"
            transform="translate(-178 -53)"
            style={{
              opacity: 0.55,
              fill: "#ffe25e",
            }}
          />
          <path
            className="cls-13"
            d="M973 322a54 54 0 0 1-8-2l12 12 10-8a56 56 0 0 1-14-2Z"
            transform="translate(-178 -53)"
          />
          <path
            d="M968 315s5-40-1-38-9 9-2 10h32s2-7-2-8c-7-3-7 21-8 37"
            transform="translate(-178 -53)"
            style={{
              stroke: "#fff",
              strokeWidth: ".49px",
              fill: "none",
              strokeMiterlimit: 10,
            }}
          />
          <path
            className="cls-17"
            d="M993 323h-32a4 4 0 0 1-4-4 4 4 0 0 1 4-4h32a4 4 0 0 1 5 4 4 4 0 0 1-5 4Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-17"
            d="M978 343c-10 0-18-8-18-18v-3h37v3c0 10-9 18-19 18Z"
            transform="translate(-178 -53)"
          />
          <path
            d="M986 341a18 18 0 0 0 11-16v-3h-35l24 19Z"
            transform="translate(-178 -53)"
            style={{
              fill: "#e1e8f0",
              mixBlendMode: "multiply",
            }}
          />
          <path
            className="cls-19"
            d="M730 225h18M856 225h18M751 177l13 12M802 156v18M853 177l-13 12"
          />
          <path
            d="m538 90-11-15a11 11 0 0 0-13-3 149 149 0 0 0-38 30 10 10 0 0 0 0 13l13 14a9 9 0 0 1 1 11 111 111 0 0 0-10 20 10 10 0 0 1-9 7h-22a10 10 0 0 0-10 9 142 142 0 0 0 0 48 10 10 0 0 0 11 8h20a10 10 0 0 1 10 6 110 110 0 0 0 5 10l5 10a9 9 0 0 1-1 11l-13 16a10 10 0 0 0 1 13 153 153 0 0 0 40 29 11 11 0 0 0 13-2l12-16a10 10 0 0 1 12-4 121 121 0 0 0 24 5 10 10 0 0 1 9 8l2 18a10 10 0 0 0 11 9 155 155 0 0 0 49-12 10 10 0 0 0 6-10l-4-22a9 9 0 0 1 4-10 115 115 0 0 0 17-14 10 10 0 0 1 13-1l16 9a11 11 0 0 0 14-3 145 145 0 0 0 21-44 10 10 0 0 0-5-12l-20-9a10 10 0 0 1-6-9 107 107 0 0 0 0-22 10 10 0 0 1 6-10l18-8a10 10 0 0 0 6-12 144 144 0 0 0-9-22 146 146 0 0 0-13-20 11 11 0 0 0-13-3l-18 9a10 10 0 0 1-12-2 115 115 0 0 0-19-14 10 10 0 0 1-5-11l6-18a10 10 0 0 0-7-12 159 159 0 0 0-48-10 10 10 0 0 0-11 8l-3 19a10 10 0 0 1-9 8 119 119 0 0 0-24 6 10 10 0 0 1-12-4Zm78 38c89 44 48 160-50 142a12 12 0 0 1-3-1c-89-43-48-159 50-142a11 11 0 0 1 3 1Z"
            transform="translate(-178 -53)"
            style={{
              opacity: 0.4,
              fill: "#006661",
            }}
          />
          <path
            d="m344 256-5-8a5 5 0 0 0-7-1 72 72 0 0 0-18 14 5 5 0 0 0 0 7l6 6a5 5 0 0 1 1 6 53 53 0 0 0-5 9 5 5 0 0 1-4 3l-11 1a5 5 0 0 0-5 4 68 68 0 0 0 1 23 5 5 0 0 0 5 4h9a5 5 0 0 1 5 3l2 5 3 4a5 5 0 0 1 0 5l-7 8a5 5 0 0 0 1 6 73 73 0 0 0 19 14 5 5 0 0 0 6-1l6-7a5 5 0 0 1 5-2 59 59 0 0 0 12 2 5 5 0 0 1 4 4l2 9a5 5 0 0 0 5 4 75 75 0 0 0 23-6 5 5 0 0 0 3-5l-2-10a5 5 0 0 1 2-5 55 55 0 0 0 8-7 5 5 0 0 1 6 0l8 4a5 5 0 0 0 7-2 69 69 0 0 0 10-20 5 5 0 0 0-3-6l-9-4a5 5 0 0 1-3-5 51 51 0 0 0 0-10 5 5 0 0 1 3-5l9-4a5 5 0 0 0 2-6 69 69 0 0 0-4-10 70 70 0 0 0-6-10 5 5 0 0 0-7-1l-8 4a5 5 0 0 1-6-1 56 56 0 0 0-9-7 5 5 0 0 1-2-5l2-9a5 5 0 0 0-3-5 76 76 0 0 0-23-5 5 5 0 0 0-5 4l-2 9a5 5 0 0 1-4 4 57 57 0 0 0-11 2 5 5 0 0 1-6-1Zm37 18c43 21 23 76-24 68a6 6 0 0 1-1 0c-43-21-23-77 24-68a5 5 0 0 1 1 0Z"
            transform="translate(-178 -53)"
            style={{
              fill: "#ffdd02",
              opacity: 0.4,
            }}
          />
          <ellipse
            className="cls-10"
            cx={124.7}
            cy={732.2}
            rx={29.1}
            ry={27.9}
          />
          <path
            className="cls-10"
            d="M1439 229c0-7-6-13-14-13s-14 6-14 13 6 14 14 14 14-6 14-14ZM416 213c0-8-7-14-15-14s-14 6-14 14a14 14 0 0 0 14 13c8 0 15-6 15-13ZM1549 901c0-8-6-14-14-14s-14 6-14 14 6 13 14 13a14 14 0 0 0 14-13Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-22"
            d="M1437 471c0-8-7-14-15-14s-14 6-14 14a14 14 0 0 0 14 14c8 0 15-7 15-14Z"
            transform="translate(-178 -53)"
          />
          <ellipse className="cls-10" cx={659} cy={198.1} rx={24.7} ry={23.7} />
          <path
            className="cls-22"
            d="M249 594c0-8-7-14-15-14s-14 6-14 14 6 13 14 13 15-6 15-13Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-23"
            d="M461 594c4-3 32 10 32 14s19 46 19 46l35-28 3-13c1-2 7-6 9-5s-2 4-2 4c-1 2 2 3 2 3s10-4 10-7 7 6 6 7l-19 17s-44 51-48 52c-2 2-12-16-22-28s-36-53-25-62Z"
            transform="translate(-178 -53)"
          />
          <path
            d="M371 970s-6 6-6 8-1 26 2 28 10 4 7 6c-1 2-15 1-24 1-3 0-6-21-7-25-2-4-6-14-4-17 0-2 4-5 8-8 5-3 10-10 10-10Z"
            transform="translate(-178 -53)"
            style={{
              fill: "#f48c7f",
            }}
          />
          <path
            className="cls-23"
            d="m435 984-6 15-2 11c0 8 38-7 30-11a9 9 0 0 1-4-6c0-4 3-10 3-10Z"
            transform="translate(-178 -53)"
          />
          <path
            d="m494 695 3 28c0 45 9 133 7 141-4 21-49 126-49 126l-24-3 26-127-6-50-16-100Z"
            transform="translate(-178 -53)"
            style={{
              fill: "#50bfa5",
            }}
          />
          <path
            d="m413 719-4 27-13 108-47 106s7 16 17 18l75-109 46-139-2-31Z"
            transform="translate(-178 -53)"
            style={{
              fill: "#96d9c9",
            }}
          />
          <path
            d="m504 628-34 4-1-41c0-15 1-36 3-35 5 1 13 4 17 10 15 20 15 62 15 62Z"
            transform="translate(-178 -53)"
            style={{
              fill: "#b75742",
            }}
          />
          <path
            className="cls-28"
            d="m487 589 14 136c-61 29-95 5-95 5s2-92 0-105c-1-8-3-63 2-65a134 134 0 0 1 23-5c8-1 36-1 41 1a65 65 0 0 1 15 33ZM347 963s15 40 20 41c2 1 9 2 10 5v4h-29l-6-25-7-20 12-5ZM425 1013l4-14s9 4 14 3l13-3c19 6 33 9 31 14h-62Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-23"
            d="M508 684a6 6 0 0 0 1 0c-1-13-1-26 3-30l-1-4c-5 4-7 13-6 29a26 26 0 0 0 0 3c1 2 3 3 3 2ZM439 530l-3 26s14 30 22 28c8-3 3-30 3-30s-4-14-3-22-19-2-19-2Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-28"
            d="M458 532c2-7-19-2-19-2v2a12 12 0 0 0 2 4 26 26 0 0 0 18 8l-1-12Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-23"
            d="M436 493s-4 30 3 38 23 11 28 4c6-7 5-39-6-47s-25 5-25 5Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-3"
            d="M456 472a33 33 0 0 0-17 10c-4 0-10 3-16 12-7 12-1 25 7 32s8 13 8 13l1-3a22 22 0 0 0 1-9 18 18 0 0 0-1-6c-2-4 4-7 6-11 1-2 1-9 4-13l2-4s6-4 12-3 5-20-7-18Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-23"
            d="M445 516c0 3-2 6-4 6s-4-3-4-6 2-7 4-7 4 3 4 7Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-5"
            d="m457 524 11-1s0 5-5 5c-6 1-6-4-6-4Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-3"
            d="m550 592-7-9-50 49c-3 3-2 9 2 13s11 6 14 3l50-49-9-7Z"
            transform="translate(-178 -53)"
          />
          <ellipse
            cx={641.8}
            cy={502.3}
            rx={126.4}
            ry={125.7}
            transform="rotate(-44 488 695)"
            style={{
              fill: "#c5ddf9",
              opacity: 0.6,
            }}
          />
          <path
            className="cls-30"
            d="M551 589a126 126 0 0 0 80 39l137-138-1-1a126 126 0 0 0-39-79ZM643 376 517 504l1 12a127 127 0 0 0 15 49l171-173a124 124 0 0 0-61-16Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-31"
            d="M744 402c-55-56-145-57-201-1s-58 145-3 201 145 57 201 2 58-145 3-202ZM551 591c-48-50-47-130 3-179s130-48 178 2 48 129-2 178-130 48-179-1Z"
            transform="translate(-178 -53)"
          />
          <path
            d="M738 408c-52-52-136-53-189-1s-55 136-3 189 136 54 189 2 54-137 3-190ZM551 591c-48-50-47-130 3-179s130-48 178 2 48 129-2 178-130 48-179-1Z"
            transform="translate(-178 -53)"
            style={{
              fill: "#50bfa5",
              mixBlendMode: "multiply",
              opacity: 0.5,
            }}
          />
          <path
            className="cls-31"
            d="m338 805-7-8a20 20 0 0 1 0-29l144-139a20 20 0 0 1 29 1l7 8a20 20 0 0 1 0 28L367 806a20 20 0 0 1-29-1Z"
            transform="translate(-178 -53)"
          />
          <path
            d="M346 726a4 4 0 0 1 0-1l10-88 35-52 17 23-33 43-12 55-4 15 2 3a34 34 0 0 0 3 6 38 38 0 0 1 4 7l1 6 1 5a8 8 0 0 0 1 2 1 1 0 0 1-1 2l-3-3-3-7-2 9-3 13c-1 2-2 1-2 0l1-14-1-2-2 15c0 2-2 3-3 1-1-1 1-14 1-14l-1-2-2 12a1 1 0 0 1-2-1c-1-1 1-13 1-13l-1-1-2 10a1 1 0 0 1-2 0c-1-1 1-9 1-13s2-9 1-14v-2Z"
            transform="translate(-178 -53)"
            style={{
              fill: "#f8a492",
            }}
          />
          <path
            className="cls-28"
            d="m365 616 28 19s17-24 26-33c11-10-4-44-12-42-15 5-42 56-42 56Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-23"
            d="M820 968s-2 18-7 24l-6 8c-3 6-1 14 1 19 1 2 0 2 2 3a15 15 0 0 0 18-9 44 44 0 0 0 4-15c0-17 5-25 5-25ZM899 976s1 21 0 28c-1 3-5 11-3 14l4 4 46 1c3 0 1-1-1-3l-17-9-4-3a32 32 0 0 1-6-6c-4-3-4-22-4-22Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-34"
            d="M935 701s6 34 2 56-22 226-22 226l-21 1s-4-85-3-97 7-32 7-32l-2-68 25-91Z"
            transform="translate(-178 -53)"
          />
          <path
            d="M875 694s-16 25-20 45 3 83-5 110c-4 14-19 36-21 55s-11 67-11 67l20 5 47-122 38-111 9-56Z"
            transform="translate(-178 -53)"
            style={{
              fill: "#ffa400",
            }}
          />
          <path
            className="cls-36"
            d="M830 1010c-12 2-19-5-23-10-3 6-4 14-2 19 2 4 7 4 11 4 5 0 8-2 11-6a37 37 0 0 0 3-7ZM924 1008c-12 3-21 1-26-1-1 4-3 9-2 11 1 4 3 4 4 4l49 1a1 1 0 0 0 1-2c-2-3-25-12-26-13Z"
            transform="translate(-178 -53)"
          />
          <path
            d="M1008 643c1-2-8-4-8-6s11-1 12-3c1-3-13-2-13-3s15-3 14-6-15 4-15 2 13-5 13-8c0-2-22 7-25 6s4-10 2-12-9 17-11 18-32 10-43 11c0-4-8-23-9-27-6 4-14 0-20 3 3 11 10 48 13 50 8 5 54-19 62-24s11-2 16-3 11 4 12 2Z"
            transform="translate(-178 -53)"
            style={{
              fill: "#f38b80",
            }}
          />
          <path
            className="cls-3"
            d="M927 534c2-11 4-22-2-33a29 29 0 0 0-23-16c-28-3-22 23-60 28-12 2-24 4-34 10-18 11-25 28-13 57 30 70 100 9 111-3s19-37 21-43Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-36"
            d="M883 567s-14 1-22 11 13 83 15 95-15 44-15 44 55 11 69 1v-99c-1-9-14-42-17-45s-30-7-30-7Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-23"
            d="M890 538v2l-7 27c-3 6 10 24 23 21 3 0-3-16-3-18l2-12 2-8 2-12Z"
            transform="translate(-178 -53)"
          />
          <path
            d="M890 540v-2h19l-2 12-2 8a18 18 0 0 1-9-5 24 24 0 0 1-7-10l1-3Z"
            transform="translate(-178 -53)"
            style={{
              fill: "#f47458",
              opacity: 0.5,
            }}
          />
          <path
            className="cls-23"
            d="M902 493a22 22 0 0 0-14 8c-5 7-11 30 3 42s27-1 29-16 2-35-18-34Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-23"
            d="M924 523c-1 4-3 6-5 6s-3-4-2-8 3-6 5-5 3 4 2 7Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-3"
            d="M910 493s-18 21-26 22-10 12-10 12 3-26 11-31 25-3 25-3Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-23"
            d="M886 520c1 4 0 7-3 8s-5-2-5-6 0-8 3-8 5 2 5 6Z"
            transform="translate(-178 -53)"
          />
          <path
            d="m886 627 59 9a3 3 0 0 1 2 3l-11 79a3 3 0 0 1-4 3l-58-9a3 3 0 0 1-3-3l11-79a3 3 0 0 1 4-3Z"
            transform="translate(-178 -53)"
            style={{
              fill: "url(#linear-gradient)",
            }}
          />
          <path
            className="cls-40"
            d="M930 631a1 1 0 0 0-1-1l-24-4a1 1 0 0 0-1 1v3l25 3Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-40"
            d="M917 625a4 4 0 0 0-4 3 4 4 0 1 0 4-3Zm0 6a3 3 0 1 1 2-2 3 3 0 0 1-2 2Z"
            transform="translate(-178 -53)"
          />
          <path
            d="M929 630a1 1 0 0 1 1 1l-1 2-25-3a3 3 0 0 0 2 3l20 3a3 3 0 0 0 3-3l1-2a1 1 0 0 0-1-1Z"
            transform="translate(-178 -53)"
            style={{
              fill: "#355389",
            }}
          />
          <path
            className="cls-5"
            d="M912 534h-14s1 5 6 5c8 1 8-5 8-5Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-23"
            d="m845 647 21 2v21l52 13 9-6c2-2 11-2 12-2s2 1 0 2-5 2-6 4h4l4-3 1-3 1 2v2l1 3-1 8c0 3-1 4-3 5a38 38 0 0 1-9 2c-7 1-14-1-17-2l-49-5s-18-2-19-6l-1-37Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-36"
            d="M863 575s-6 3-12 17c-6 13-8 79-8 79l23-4 11-30a57 57 0 0 0-6-56c-3-5-6-7-8-6Z"
            transform="translate(-178 -53)"
          />
          <path
            style={{
              fill: "url(#linear-gradient-2)",
            }}
            d="M1143 813h12v129h-12z"
          />
          <path
            d="M1380 998h-105a8 8 0 0 1 7-8h90a8 8 0 0 1 8 8Z"
            transform="translate(-178 -53)"
            style={{
              fill: "url(#linear-gradient-3)",
            }}
          />
          <rect
            x={1080.9}
            y={781.7}
            width={140.4}
            height={39.8}
            rx={13.7}
            style={{
              fill: "url(#linear-gradient-4)",
            }}
          />
          <path
            d="M1260 972s-34 25-28 41c0 0 37-16 42-28s-1-19-1-19Z"
            transform="translate(-178 -53)"
            style={{
              fill: "#ff5e28",
            }}
          />
          <path
            d="m1265 952 6 16a6 6 0 0 1-2 6 15 15 0 0 1-5 2 7 7 0 0 1-7-3l-7-13Z"
            transform="translate(-178 -53)"
            style={{
              fill: "url(#linear-gradient-5)",
            }}
          />
          <path
            d="M1320 806s-70 12-101 40 28 117 28 117 10 0 21-10c0 0-34-67-5-87 34-22 72-26 72-26l-14-32Z"
            transform="translate(-178 -53)"
            style={{
              fill: "url(#linear-gradient-6)",
            }}
          />
          <path
            className="cls-34"
            d="M1238 1004c8-3 29-18 32-19s10 4 10 4 2 3 0 7c-5 6-16 18-31 22-11 3-19 0-23-3a32 32 0 0 1 12-11Z"
            transform="translate(-178 -53)"
          />
          <path
            d="M1249 1018c15-4 26-16 31-22-1 3-3 8-9 12a77 77 0 0 1-44 16c-5-1-4-5-1-9 4 3 12 6 23 3Z"
            transform="translate(-178 -53)"
            style={{
              fill: "url(#linear-gradient-7)",
            }}
          />
          <path
            d="m1287 978-7 13a6 6 0 0 1-6 4 17 17 0 0 1-4-1 4 4 0 0 1-3-5l5-17Z"
            transform="translate(-178 -53)"
            style={{
              fill: "url(#linear-gradient-8)",
            }}
          />
          <path
            d="M1388 785s15 41 0 54-53 27-62 52-22 75-41 92c0 0-13-1-18-6 0 0 11-74 18-92 6-17 15-40 32-53 5-4 4-10 2-16l-4-11Z"
            transform="translate(-178 -53)"
            style={{
              fill: "url(#linear-gradient-9)",
            }}
          />
          <path
            className="cls-51"
            d="M1225 752c26 1 18-40 17-42l40 28s-2 22-35 34a41 41 0 0 1-23 2 36 36 0 0 0 1-22Z"
            transform="translate(-178 -53)"
          />
          <path
            d="M1174 739c10-6 21 0 21 0 13 9 23 12 30 13a36 36 0 0 1-1 22c-15-3-25-14-30-19a5 5 0 0 0-6-1c-2 2-4 4-4 6 1 5-4 6-5 4s2-11 2-11l-15 15c-5 4-9 0-9 0s7-22 17-29Z"
            transform="translate(-178 -53)"
            style={{
              fill: "url(#linear-gradient-10)",
            }}
          />
          <path
            className="cls-53"
            d="M1347 645s-38-15-109 44c0 0-6 12 0 23s68 64 77 93c0 0 37 12 75-16 0 0-4-82-43-144Z"
            transform="translate(-178 -53)"
          />
          <path
            d="m1272 632 18 22a7 7 0 0 1 1 8c-2 6-8 13-22 12a12 12 0 0 1-10-6l-13-27Z"
            transform="translate(-178 -53)"
            style={{
              fill: "url(#linear-gradient-11)",
            }}
          />
          <path
            className="cls-51"
            d="M1376 743c5-18-40-58-40-58l11-40s97 65 72 117c-4 7-8 12-14 16-7-21-20-31-29-35Z"
            transform="translate(-178 -53)"
          />
          <path
            d="M1309 741s53 21 66 5a9 9 0 0 0 1-3c9 4 22 14 29 35-28 18-75-10-88-18a10 10 0 0 0-7-2c-5 1-14 3-19 2-6-1-16 23-27 16 0 0 9-42 45-35Z"
            transform="translate(-178 -53)"
            style={{
              fill: "url(#linear-gradient-12)",
            }}
          />
          <path
            d="m1231 598 4 51a9 9 0 0 0 12 8l11-3a18 18 0 0 0 10-8l4-5-6-43s-32-12-35 0Z"
            transform="translate(-178 -53)"
            style={{
              fill: "url(#linear-gradient-13)",
            }}
          />
          <path
            d="M1233 575c7 0 10 4 12 8a3 3 0 0 0 4 2 3 3 0 0 1 3 0 4 4 0 0 0 5 0c3-3 9-6 16-2s5 9 3 13a4 4 0 0 0 2 5c9 4 6 11 5 14a4 4 0 0 1-2 2c-3 0-10 3-11 8v1a49 49 0 0 0-11-2v-16a3 3 0 0 0-2-3c-2-2-9-6-14-3-7 3-21 4-23-4s0-22 13-23Z"
            transform="translate(-178 -53)"
            style={{
              fill: "url(#linear-gradient-14)",
            }}
          />
          <path
            d="M1270 634s-3-15 2-18 14 0 11 10c-4 13-13 8-13 8Z"
            transform="translate(-178 -53)"
            style={{
              fill: "url(#linear-gradient-15)",
            }}
          />
          <path
            className="cls-31"
            d="M1281 782h-111a5 5 0 1 1 0-10h111a5 5 0 0 1 0 10Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-3"
            d="M1069 681h93a18 18 0 0 1 16 10l43 91h-115a11 11 0 0 1-10-7l-34-84a7 7 0 0 1 7-10Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-59"
            d="M1084 1021a5 5 0 0 1-1 0 4 4 0 0 1-3-6l98-221a5 5 0 0 1 6-3 4 4 0 0 1 3 6l-98 221a5 5 0 0 1-5 3Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-59"
            d="M1195 1021a5 5 0 0 1-4-3l-98-221a4 4 0 0 1 2-6 5 5 0 0 1 6 3l98 221a4 4 0 0 1-2 6 5 5 0 0 1-2 0ZM1389 1021a5 5 0 0 1-2 0 4 4 0 0 1-3-6l98-221a5 5 0 0 1 7-3 4 4 0 0 1 2 6l-98 221a5 5 0 0 1-4 3Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-59"
            d="M1499 1021a5 5 0 0 1-4-3l-98-221a4 4 0 0 1 2-6 5 5 0 0 1 6 3l98 221a4 4 0 0 1-2 6 5 5 0 0 1-2 0Z"
            transform="translate(-178 -53)"
          />
          <path
            className="cls-59"
            d="M1511 787a5 5 0 0 0-1-4 4 4 0 0 0-4-2h-447a5 5 0 0 0-4 2 6 6 0 0 0 0 6l5 12a7 7 0 0 0 6 4h437a5 5 0 0 0 5-5Z"
            transform="translate(-178 -53)"
          />
          <g
            style={{
              opacity: 0.3,
            }}
          >
            <path
              className="cls-53"
              d="M1046 438h131a31 31 0 0 1 31 31v50a31 31 0 0 1-7 20l7 36-45-25h-117a31 31 0 0 1-32-31v-50a31 31 0 0 1 32-31Z"
              transform="translate(-178 -53)"
            />
            <path
              className="cls-5"
              d="M1043 476h136a5 5 0 0 0 5-5 5 5 0 0 0-5-6h-136a5 5 0 0 0-5 6 5 5 0 0 0 5 5ZM1043 498h136a5 5 0 0 0 5-5 5 5 0 0 0-5-5h-136a5 5 0 0 0-5 5 5 5 0 0 0 5 5ZM1043 519h136a5 5 0 0 0 5-5 5 5 0 0 0-5-5h-136a5 5 0 0 0-5 5 5 5 0 0 0 5 5Z"
              transform="translate(-178 -53)"
            />
          </g>
        </g>
      </g>
    </svg>
  </Container>
);

export default HeroImage;
