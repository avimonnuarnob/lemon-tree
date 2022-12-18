import CastDetails from '../../components/module/cast/view/CastDetails';

import styles from '../../styles/Cast.module.css';

export default function CastDetailsPage() {
  return (
    <section className={styles.cast__section}>
      <div className='container'>
        <CastDetails />
      </div>
    </section>
  );
}
