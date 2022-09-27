import { useEffect } from 'react';
import { DragonListComponent } from '../DragonListComponent/DragonListComponent';
import { DragonListStyled } from './DragonListStyled';
import { useGetDragonsQuery } from 'redux/API/api';
import { Spinner } from 'react-bootstrap';

export const DragonList = () => {
  const { data, error, isLoading, refetch } = useGetDragonsQuery();

  useEffect(() => {
    if (data) {
      setTimeout(refetch, 1500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch]);

  return (
    <DragonListStyled>
      {isLoading && <Spinner animation="border" variant="primary" />}
      {error && <p>{error.message}</p>}
      {data &&
        data.map(dragon => (
          <li key={dragon.id}>
            <DragonListComponent dragon={dragon} link />
          </li>
        ))}
    </DragonListStyled>
  );
};
