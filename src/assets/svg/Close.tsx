import React from 'react';

const SvgClose = (props: any) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M13.0816 4.59623L4.5963 13.0815"
      stroke={props.color}
      strokeWidth="3"
    />
    <path
      d="M13.0815 13.0816L4.59622 4.5963"
      stroke={props.color}
      strokeWidth="3"
    />
  </svg>
);
export default SvgClose;
