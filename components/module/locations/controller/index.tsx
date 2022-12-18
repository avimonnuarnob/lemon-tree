import { gql, TypedDocumentNode, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { LocationsData } from '../../../../types/locations';

type FilterLocation = {
  name?: String;
  type?: String;
  dimension?: String;
};

interface LocationsVars {
  page: number;
}

export const GET_LOCATIONS: TypedDocumentNode<
  LocationsData,
  LocationsVars
> = gql`
  query locations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        pages
        next
        prev
      }
      results {
        id
        dimension
      }
    }
  }
`;

const getApiUrlParams = (parameter: Record<string, string>) => {
  let queryparamter: {
    page: string | number;
    filter?: FilterLocation;
    st?: string;
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

export function useLocationsController() {
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState<FilterLocation | undefined>(undefined);

  const { loading, error, data } = useQuery(GET_LOCATIONS, {
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
