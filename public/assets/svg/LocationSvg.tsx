import * as React from 'react';

const LocationSvg = (props: any) => (
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
        d='M22 35.876A16.002 16.002 0 0 1 24 4a16 16 0 0 1 2 31.876v4.148c7.892.184 14 1.446 14 2.976 0 1.656-7.164 3-16 3S8 44.656 8 43c0-1.53 6.108-2.792 14-2.976v-4.148ZM24 24a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z'
        fill='url(#b)'
      />
    </g>
    <defs>
      <linearGradient
        id='b'
        x1={4.987}
        y1={-4.328}
        x2={44.695}
        y2={0.716}
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

export default LocationSvg;
