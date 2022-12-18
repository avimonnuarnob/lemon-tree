import Image from 'next/image';
import styles from './Card.module.css';

export default function Card({
  title,
  caption,
  imgsrc,
}: {
  title?: string;
  caption?: string;
  imgsrc?: string;
}) {
  return (
    <div className={styles.card}>
      {imgsrc ? (
        <div className={styles.imgContainer} style={{ height: '180px' }}>
          <Image
            src={imgsrc}
            alt={caption ?? title ?? ''}
            fill
            style={{ objectFit: 'cover' }}
            sizes='(max-width: 768px) 400px,
              (max-width: 1200px) 200px,
              200px'
          />
        </div>
      ) : null}
      {caption ? (
        <span style={{ margin: '0' }} className='fs-caption'>
          {caption}
        </span>
      ) : null}
      {title ? <p>{title}</p> : null}
    </div>
  );
}
