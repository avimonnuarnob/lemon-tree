import * as React from 'react';

const OriginSvg = (props: any) => (
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
        d='M24 44C12.954 44 4 35.046 4 24S12.954 4 24 4s20 8.954 20 20-8.954 20-20 20Zm12.71-12.096v-.21c0-1.844 0-2.686-1.304-3.432a14.75 14.75 0 0 0-1.29-.65c-.734-.334-1.22-.552-1.876-1.512a24.062 24.062 0 0 1-.232-.344c-.69-1.05-1.188-1.806-3.084-1.506-3.73.592-4.006 1.248-4.17 2.356l-.026.182c-.242 1.62-.286 2.164.39 2.874 2.53 2.654 4.046 4.568 4.506 5.688.224.546.8 2.2.404 3.836a16.37 16.37 0 0 0 6.302-4.474c.22-.748.38-1.68.38-2.808ZM24 7.666a16.29 16.29 0 0 0-11.792 5.032c.354.246.662.592.874 1.068.408.914.408 1.856.408 2.69 0 .656 0 1.28.21 1.73.288.616 1.532.88 2.63 1.108.394.084.798.168 1.166.27 1.012.28 1.796 1.19 2.422 1.92.26.302.646.748.84.86.1-.072.422-.422.58-.996.124-.44.088-.828-.09-1.04-1.12-1.32-1.058-3.86-.712-4.798.544-1.478 2.244-1.368 3.488-1.288.464.03.9.06 1.228.018 1.244-.156 1.628-2.05 1.898-2.42.584-.8 2.372-2.006 3.48-2.75A16.276 16.276 0 0 0 24 7.666Z'
        fill='url(#b)'
      />
    </g>
    <defs>
      <linearGradient
        id='b'
        x1={0.235}
        y1={-3.931}
        x2={49.29}
        y2={4.244}
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

export default OriginSvg;