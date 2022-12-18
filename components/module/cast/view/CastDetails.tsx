import EpisodesSvg from '../../../../public/assets/svg/EpisodesSvg';
import GenderSvg from '../../../../public/assets/svg/GenderSvg';
import LocationSvg from '../../../../public/assets/svg/LocationSvg';
import OriginSvg from '../../../../public/assets/svg/OriginSvg';
import SpeciesSvg from '../../../../public/assets/svg/SpeciesSvg';
import StatusSvg from '../../../../public/assets/svg/StatusSvg';
import Card from '../../../common/Card';
import Loader from '../../../common/Loader';
import { useCastDetailsController } from '../controller/CastDetailsController';

import styles from './CastDetails.module.css';

export default function CastDetails() {
  const { loading, error, data } = useCastDetailsController();

  return (
    <>
      {loading ? <Loader /> : null}
      {data ? (
        <div className={styles.castContainer}>
          <div className='d--f fd--c jc--c ai--c'>
            <h1 style={{ marginBlock: '2rem' }}>{data?.character?.name}</h1>
            <div style={{ width: '200px' }}>
              <Card imgsrc={data?.character?.image} />
            </div>
          </div>
          <div className={styles.castDetails}>
            <div className={styles.castDetails_status}>
              <StatusSvg />
              <span className='fs-caption'>Status</span>
              <h2 className='fs-secondary-heading'>
                {data?.character?.status}
              </h2>
            </div>
            <div className={styles.castDetails_species}>
              <SpeciesSvg />
              <span className='fs-caption'>Species</span>
              <h2 className='fs-secondary-heading'>
                {data?.character?.species}
              </h2>
            </div>
            <div className={styles.castDetails_gender}>
              <GenderSvg />
              <span className='fs-caption'>Species</span>
              <h2 className='fs-secondary-heading'>
                {data?.character?.gender}
              </h2>
            </div>
            <div className={styles.castDetails_origin}>
              <OriginSvg />
              <span className='fs-caption'>Origin</span>
              <h2 className='fs-secondary-heading'>
                {data?.character?.origin?.dimension}
              </h2>
            </div>
            <div className={styles.castDetails_location}>
              <LocationSvg />
              <span className='fs-caption'>Last known location</span>
              <h2 className='fs-secondary-heading'>
                {data?.character?.location?.dimension}
              </h2>
            </div>
            <div className={styles.castDetails_episodes}>
              <EpisodesSvg />
              <span className='fs-caption'>Episode(s)</span>
              <ul>
                {data?.character?.episode?.slice(0, 5).map((e: any) => (
                  <li
                    className='fs-secondary-heading'
                    key={e.name}
                    style={{ margin: '0.25em 1em' }}
                  >
                    {e.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
      {error ? (
        <p style={{ textAlign: 'center', marginBlock: '2rem' }}>
          Something went wrong!!
        </p>
      ) : null}
    </>
  );
}
