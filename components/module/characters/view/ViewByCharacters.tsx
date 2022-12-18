import { useRouter } from 'next/router';
import Card from '../../../common/Card';
import Cards from '../../../common/Cards';
import Loader from '../../../common/Loader';
import Pagination from '../../../common/Pagination';
import { useCharactersController } from '../controller';

export default function ViewByCharacters() {
  const { data, loading, error } = useCharactersController();
  const router = useRouter();
  return (
    <>
      {loading ? (
        <div style={{ textAlign: 'center', marginBlock: '2rem' }}>
          <Loader />
        </div>
      ) : null}
      {data ? (
        <>
          {data?.characters?.results?.length ? (
            <>
              <Cards>
                {data?.characters.results.map((el: any) => (
                  <div
                    key={el.id}
                    onClick={() => router.push(`/cast/${el.id}`)}
                  >
                    <Card imgsrc={el.image} title={el.name} />
                  </div>
                ))}
              </Cards>
              <Pagination
                prev={data?.characters.info.prev}
                next={data?.characters.info.next}
                pages={data?.characters.info.pages}
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
