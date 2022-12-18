import { Location } from '../../../../types/locations';
import Card from '../../../common/Card';
import Cards from '../../../common/Cards';
import Loader from '../../../common/Loader';
import Pagination from '../../../common/Pagination';
import { useLocationsController } from '../controller';

export default function ViewByLocations() {
  const { data, loading, error } = useLocationsController();

  return (
    <>
      {loading ? (
        <div style={{ textAlign: 'center', marginBlock: '2rem' }}>
          <Loader />
        </div>
      ) : null}

      {data ? (
        <>
          {data?.locations?.results?.length ? (
            <>
              <Cards>
                {data?.locations.results.map((el: Location) => (
                  <Card
                    key={el.id}
                    title={el.dimension}
                    caption={`#${el.id}`}
                  />
                ))}
              </Cards>
              <Pagination
                prev={data?.locations.info.prev}
                next={data?.locations.info.next}
                pages={data?.locations.info.pages}
              />
            </>
          ) : (
            <h1
              className='fs-primary-heading'
              style={{ marginBlock: '2rem', textAlign: 'center' }}
            >
              No Result Found!!
            </h1>
          )}
        </>
      ) : null}

      {error ? (
        <p style={{ textAlign: 'center', marginBlock: '2rem' }}>
          Something went wrong!!
        </p>
      ) : null}
    </>
  );
}
