import { Episode } from '../../../../types/episodes';
import Card from '../../../common/Card';
import Cards from '../../../common/Cards';
import Loader from '../../../common/Loader';
import Pagination from '../../../common/Pagination';
import { useEpisodesController } from '../controller';

export default function ViewByEpisodes() {
  const { data, loading, error } = useEpisodesController();
  return (
    <>
      {loading ? (
        <div style={{ textAlign: 'center', marginBlock: '2rem' }}>
          <Loader />
        </div>
      ) : null}
      {data ? (
        <>
          {data?.episodes?.results?.length ? (
            <>
              <Cards>
                {data?.episodes.results.map((el: Episode) => (
                  <Card key={el.id} title={el.name} caption={`#${el.id}`} />
                ))}
              </Cards>
              <Pagination
                prev={data?.episodes.info.prev}
                next={data?.episodes.info.next}
                pages={data?.episodes.info.pages}
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
