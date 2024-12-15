import { useSelector } from 'react-redux';
import Blotter from './Blotter';
import { IStore } from '../store/types';

const BlotterContainer = () => {
  const blotterData = useSelector((state: IStore) => state.blotter);
  const { loading: loadingState, lastUpdated } = useSelector(
    (state: IStore) => state.ui
  );

  return (
    <Blotter
      blotterData={blotterData}
      loadingState={loadingState}
      lastUpdated={lastUpdated}
    />
  );
};

export default BlotterContainer;
