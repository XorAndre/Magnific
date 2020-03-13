import React from 'react';
const SvgSuccess = (props: any) => (
  <svg width="28" height="28" {...props} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter
        x="-14.1%"
        y="-20.2%"
        width="193.2%"
        height="140.4%"
        filterUnits="objectBoundingBox"
        id="a"
      >
        <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation="2"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g
      filter="url(#a)"
      transform="translate(-16 -16)"
      stroke-width="2"
      fill="none"
      stroke="#007C2E"
      fill-rule="evenodd"
    >
      <g transform="translate(16 16)">
        <circle cx="10" cy="10" r="9" />
        <path d="M6 10.484l2.456 2.566L13.796 7" />
      </g>
    </g>
  </svg>
);
export default SvgSuccess;
