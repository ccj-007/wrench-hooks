import * as React from 'react';
import useFirstMountState from '../../hooks/useFirstMountState'
import useUpdate from '../../hooks/useUpdate'

const FirstMountState = () => {
  const isFirstMount = useFirstMountState();
  const update = useUpdate();

  return (
    <div>
      <span>This component is just mounted: {isFirstMount ? 'YES' : 'NO'}</span>
      <br />
      <button onClick={update}>re-render</button>
    </div>
  );
};

export default FirstMountState