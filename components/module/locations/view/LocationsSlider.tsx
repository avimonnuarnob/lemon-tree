import Card from '../../../common/Card';
import Carousel from '../../../common/Carousel';
import Loader from '../../../common/Loader';

import { Location } from '../../../../types/locations';
import { useLocationsController } from '../controller';

export default function LocationsSlider() {
  const { data, loading, error } = useLocationsController();
  return (
    <div className='container' style={{ marginBlock: '4rem' }}>
      <div style={{ marginBottom: '1em' }} className='d--f ai--c jc--sb'>
        <h2 className='fs-secondary-heading'>Locations</h2>
      </div>
      {loading ? <Loader /> : null}
      {data ? (
        <Carousel>
          {data?.locations.results?.map((d: Location) => (
            <Card key={d.id} title={d.dimension} caption={`#${d.id}`} />
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
