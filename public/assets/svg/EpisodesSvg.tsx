import * as React from 'react';

const EpisodesSvg = (props: any) => (
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
        d='M44 36v4H4v-4h40ZM4 7l16 10L4 27V7Zm40 15v4H24v-4h20Zm0-14v4H24V8h20Z'
        fill='url(#b)'
      />
    </g>
    <defs>
      <linearGradient
        id='b'
        x1={0.235}
        y1={0.457}
        x2={48.676}
        y2={10.242}
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

export default EpisodesSvg;
