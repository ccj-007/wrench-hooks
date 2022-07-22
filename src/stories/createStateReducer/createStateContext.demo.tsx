import createStateContext from '../../hooks/createStateContext';

type Action = 'increment' | 'decrement';

const reducer = (state: number, action: Action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      throw new Error();
  }
};

const [useStateContext, StateProvider] = createStateContext(0);

const ComponentA = () => {
  const [count, dispatch] = useStateContext();
  return (
    <p>
      Component A &nbsp;
      <button type="button" onClick={() => dispatch('decrement')}>
        -
      </button>
      &nbsp;{count}&nbsp;
      <button type="button" onClick={() => dispatch('increment')}>
        +
      </button>
    </p>
  );
};

const ComponentB = () => {
  const [count, dispatch] = useStateContext();
  return (
    <p>
      Component B &nbsp;
      <button type="button" onClick={() => dispatch('decrement')}>
        -
      </button>
      &nbsp;{count}&nbsp;
      <button type="button" onClick={() => dispatch('increment')}>
        +
      </button>
    </p>
  );
};

export const Demo = () => {
  return (
    <StateProvider>
      <p>Those two counters share the same value.</p>
      <ComponentA />
      <ComponentB />
    </StateProvider>
  );
};