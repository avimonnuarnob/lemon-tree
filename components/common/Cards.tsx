import styles from './Cards.module.css';

export default function Cards({ children }: any) {
  return <div className={styles.cards}>{children}</div>;
}
