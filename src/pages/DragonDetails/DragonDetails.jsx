import { useEffect } from 'react';
import {
  useParams,
  // useLocation
} from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { useGetOneDragonQuery } from 'redux/API/api';
import { DragonListComponent } from 'components/DragonListComponent/DragonListComponent';
import Alert from 'react-bootstrap/Alert';

const DragonDetails = () => {
  const { dragonId } = useParams();
  // const location = useLocation();

  // const backLinkHref = location.state?.from ?? '/';

  const { data, error, isLoading, refetch } = useGetOneDragonQuery(dragonId);

  useEffect(() => {
    if (data) {
      setTimeout(refetch, 1500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch]);

  return (
    <>
      {isLoading && <Spinner animation="border" variant="primary" />}
      {error && <p>{error.message}</p>}
      {data ? (
        <DragonListComponent dragon={data} />
      ) : (
        <Alert variant="warning" style={{ textAlign: 'center' }}>
          Dragon not found
        </Alert>
      )}
    </>
  );
};

export default DragonDetails;
