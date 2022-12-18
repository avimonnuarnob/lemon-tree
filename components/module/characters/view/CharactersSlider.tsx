import { useRouter } from 'next/router';
import { Character } from '../../../../types/characters';
import Card from '../../../common/Card';
import Carousel from '../../../common/Carousel';
import Loader from '../../../common/Loader';
import { useCharactersController } from '../controller';

export default function CharactersSlider() {
  const router = useRouter();
  const { data, loading, error } = useCharactersController();
  return (
    <div className='container' style={{ marginBlock: '4rem' }}>
      <div style={{ marginBottom: '1em' }} className='d--f ai--c jc--sb'>
        <h2 className='fs-secondary-heading'>Meet The Cast</h2>
        <button
          className='button'
          data-type='inverted'
          onClick={() => router.push('/cast')}
        >
          View All
        </button>
      </div>
      {loading ? <Loader /> : null}
      {data ? (
        <Carousel>
          {data?.characters.results?.map((d: Character) => (
            <div key={d.id} onClick={() => router.push(`/cast/${d.id}`)}>
              <Card title={d.name} imgsrc={d.image} />
            </div>
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
