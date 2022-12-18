import * as React from 'react';

const SpeciesSvg = (props: any) => (
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
        d='M12.764 7.936A17.924 17.924 0 0 1 24 4c4.25 0 8.156 1.472 11.236 3.936l2.906-2.906 2.828 2.828-2.906 2.906A17.924 17.924 0 0 1 42 22v2H6v-2c0-4.25 1.472-8.156 3.936-11.236L7.03 7.86l2.828-2.828 2.906 2.906v-.002ZM6 28h36v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V28Zm12-10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
        fill='url(#b)'
      />
    </g>
    <defs>
      <linearGradient
        id='b'
        x1={2.612}
        y1={-3.931}
        x2={46.989}
        y2={2.725}
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

export default SpeciesSvg;
