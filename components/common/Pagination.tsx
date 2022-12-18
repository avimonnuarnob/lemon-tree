import { useRouter } from 'next/router';
import styles from './Pagination.module.css';

export default function Pagination({
  prev,
  next,
  pages,
}: {
  prev?: number;
  next?: number;
  pages?: number;
}) {
  const router = useRouter();
  return (
    <div className={styles.pagination}>
      <span>Page</span>
      <button
        disabled={!prev}
        onClick={() => {
          router.push({
            pathname: router.pathname,
            query: {
              ...router.query,
              page: Number(router.query.page) - 1,
            },
          });
        }}
      >
        ⬅️
      </button>
      <input
        type='text'
        defaultValue={router.query.page ?? 1}
        onKeyPress={(e: any) => {
          if (e.key === 'Enter') {
            router.push({
              pathname: router.pathname,
              query: {
                ...router.query,
                page: e.target.value,
              },
            });
          }
        }}
      />
      <button
        disabled={!next}
        onClick={() => {
          router.push({
            pathname: router.pathname,
            query: {
              ...router.query,
              page: Number(router.query.page ?? 1) + 1,
            },
          });
        }}
      >
        ➡️
      </button>
      <span>of {pages}</span>
    </div>
  );
}
