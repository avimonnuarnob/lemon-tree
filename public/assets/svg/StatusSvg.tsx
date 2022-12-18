import * as React from 'react';

const StatusSvg = (props: any) => (
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
        d='M40.486 9.514c4.524 4.536 4.68 11.76.472 16.472L23.998 42.97 7.042 25.986c-4.208-4.712-4.05-11.948.472-16.472C11.03 6 16.186 5.12 20.522 6.88l-7.836 7.836 2.828 2.83L24 9.06l-.026-.028.028.026C28.7 4.84 35.96 4.98 40.486 9.514Z'
        fill='url(#b)'
      />
    </g>
    <defs>
      <linearGradient
        id='b'
        x1={0.235}
        y1={-1.331}
        x2={49.066}
        y2={7.474}
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

export default StatusSvg;
