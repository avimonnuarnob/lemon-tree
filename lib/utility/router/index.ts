import { NextRouter } from 'next/router';

export function pushToTheRouter(
  router: NextRouter,
  data: Record<string, string>,
) {
  router.push({
    pathname: router.pathname,
    query: {
      ...router.query,
      ...data,
    },
  });
}
