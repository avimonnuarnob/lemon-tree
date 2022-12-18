import CharactersSlider from '../components/module/characters/view/CharactersSlider';
import EpisodesSlider from '../components/module/episodes/view/EpisodesSlider';
import LocationsSlider from '../components/module/locations/view/LocationsSlider';
import PlayButtonSvg from '../public/assets/svg/PlayButtonSvg';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <section className={styles.section}>
      <div>
        <h1 className={[styles.section__title, 'fs-primary-heading'].join(' ')}>
          The <span className='gradient-text'>Rick & Morty</span> Wiki
        </h1>
        <div className={styles.section__cta}>
          <button className='button'>
            <PlayButtonSvg />
            <span style={{ whiteSpace: 'nowrap' }}>Watch Now</span>
          </button>
          <p>
            Brilliant but boozy scientist Rick hijacks his fretful teenage
            grandson, Morty, for wild escapades in other worlds and alternate
            dimensions.
          </p>
        </div>
      </div>

      <CharactersSlider />
      <EpisodesSlider />
      <LocationsSlider />
    </section>
  );
}
