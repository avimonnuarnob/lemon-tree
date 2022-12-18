import * as React from 'react';

const GenderSvg = (props: any) => (
  <svg
    width={24}
    height={24}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        d='M37.172 10H28V6h16v16h-4v-9.172l-7.074 7.074a15 15 0 1 1-2.828-2.828L37.172 10Z'
        fill='url(#b)'
      />
    </g>
    <defs>
      <linearGradient
        id='b'
        x1={2.424}
        y1={-1.534}
        x2={49.026}
        y2={6.231}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#9DFE00' />
        <stop offset={1} stopColor='#14D9E6' />
      </linearGradient>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h48v48H0z' />
      </clipPath>
    </defs>
  </svg>
);

export default GenderSvg;
