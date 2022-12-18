import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import Logo from '../../public/Logo.png';
import styles from './Header.module.css';

export default function Header() {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const router = useRouter();

  useEffect(() => {
    document.body.style.setProperty(
      '--section-padding-top',
      `${ref.current.clientHeight}px`,
    );
  });

  return (
    <header className={styles.header} ref={ref}>
      <Image
        priority
        src={Logo}
        alt='Logo'
        width={200}
        style={{ margin: '0 auto', display: 'block', cursor: 'pointer' }}
        onClick={() => router.push('/')}
      />
    </header>
  );
}
