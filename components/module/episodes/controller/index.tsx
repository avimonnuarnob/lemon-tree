import { gql, TypedDocumentNode, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { EpisodesData } from '../../../../types/episodes';

type FilterEpisode = {
  name?: String;
  episode?: String;
};

interface EpisodesVars {
  page: number;
}

export const GET_EPISODES: TypedDocumentNode<EpisodesData, EpisodesVars> = gql`
  query episodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        pages
        next
        prev
      }
      results {
        id
        episode
        name
      }
    }
  }
`;

const getApiUrlParams = (parameter: Record<string, string>) => {
  let queryparamter: {
    page: string | number;
    filter?: FilterEpisode;
  } = {
    page: parameter.page || 1,
  };

  if (parameter.search && parameter.search.length) {
    queryparamter.filter = { ...queryparamter.filter, name: parameter?.search };
  }

  return {
    filter: queryparamter.filter,
    page: queryparamter.page,
  };
};

export function useEpisodesController() {
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState<FilterEpisode | undefined>(undefined);
  //   const [st, setST] = useState<Search_Type>('characters');

  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: {
      page,
      filter,
    },
  });

  useEffect(() => {
    const queryParams: { page?: string; search?: string } = router.query;
    if (queryParams.page) setPage(parseInt(queryParams.page));
    setFilter(getApiUrlParams(queryParams)?.filter);
  }, [router.query]);

  return {
    data,
    loading,
    error,
  };
}
