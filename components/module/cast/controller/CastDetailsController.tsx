import { gql, TypedDocumentNode, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { CastData } from '../../../../types/cast';

const GET_CAST_DETAILS: TypedDocumentNode<CastData> = gql`
  query characterDetails($id: ID!) {
    character(id: $id) {
      status
      species
      gender
      name
      image
      origin {
        dimension
      }
      location {
        dimension
      }
      episode {
        name
      }
    }
  }
`;

export function useCastDetailsController() {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_CAST_DETAILS, {
    variables: {
      id,
    },
  });

  return {
    data,
    loading,
    error,
  };
}
