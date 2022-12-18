import { gql, TypedDocumentNode, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CharactersData } from '../../../../types/characters';

type FilterCharacter = {
  name?: String;
  status?: String;
  species?: String;
  type?: String;
  gender?: String;
};

interface ChractersVars {
  page: number;
}

export const GET_CHARACTERS: TypedDocumentNode<
  CharactersData,
  ChractersVars
> = gql`
  query characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        pages
        next
        prev
      }
      results {
        id
        image
        name
      }
    }
  }
`;

const getApiUrlParams = (parameter: Record<string, string>) => {
  let queryparamter: {
    page: string | number;
    filter?: FilterCharacter;
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

export function useCharactersController() {
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState<FilterCharacter | undefined>(undefined);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
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
