import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div style={{ textAlign: 'center' }}>
      <span className={styles.loader}></span>
    </div>
  );
}
