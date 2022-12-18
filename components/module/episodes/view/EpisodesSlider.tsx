import Card from '../../../common/Card';
import Carousel from '../../../common/Carousel';
import Loader from '../../../common/Loader';

import { Episode } from '../../../../types/episodes';
import { useEpisodesController } from '../controller';

export default function EpisodesSlider() {
  const { data, loading, error } = useEpisodesController();
  return (
    <div className='container' style={{ marginBlock: '4rem' }}>
      <div style={{ marginBottom: '1em' }} className='d--f ai--c jc--sb'>
        <h2 className='fs-secondary-heading'>Episodes</h2>
      </div>
      {loading ? <Loader /> : null}
      {data ? (
        <Carousel>
          {data?.episodes.results?.map((d: Episode) => (
            <Card key={d.id} title={d.name} caption={d.episode} />
          ))}
        </Carousel>
      ) : null}
      {error ? (
        <p style={{ textAlign: 'center', color: 'tomato' }}>
          Something went wrong!!
        </p>
      ) : null}
    </div>
  );
}
