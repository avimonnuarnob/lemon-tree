import { useRouter } from 'next/router';
import { useState } from 'react';

import ViewByCharacters from '../../components/module/characters/view/ViewByCharacters';
import ViewByEpisodes from '../../components/module/episodes/view/ViewByEpisodes';
import ViewByLocations from '../../components/module/locations/view/ViewByLocations';
import { pushToTheRouter } from '../../lib/utility/router';

import styles from '../../styles/Cast.module.css';

type Search_Type = 'characters' | 'locations' | 'episodes';

export default function Cast() {
  const [searchType, setSearchType] = useState<Search_Type>('characters');
  const router = useRouter();

  return (
    <section className={styles.cast__section}>
      <div className='container'>
        <div className='d--f ai--c jc--sb'>
          <h2 className='fs-secondary-heading fg--1'>The Cast</h2>
          <div className={styles.searchField}>
            <select
              id='type'
              name='type'
              defaultValue={searchType}
              onChange={(e: any) => {
                setSearchType(e.target.value);
              }}
            >
              <option value='locations'>Locations</option>
              <option value='characters'>Characters</option>
              <option value='episodes'>Episodes</option>
            </select>
            <input
              placeholder='Search'
              onKeyPress={(e: any) => {
                if (e.key === 'Enter') {
                  pushToTheRouter(router, { search: e.target.value });
                }
              }}
            />
          </div>
        </div>

        {searchType === 'characters' ? <ViewByCharacters /> : null}
        {searchType === 'episodes' ? <ViewByEpisodes /> : null}
        {searchType === 'locations' ? <ViewByLocations /> : null}
      </div>
    </section>
  );
}
