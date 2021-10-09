import { useReducer } from 'react';

function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter({ initialCount = 0 }) {
  const [state, dispatch] = useReducer(reducer, { count: initialCount });
  return (
    <>
      Count: {state.count}
      <button
        className="btn btn-warning"
        onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
        Reset
      </button>
      <button className="btn btn-success" onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button className="btn btn-danger" onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
export default Counter;